import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { petData, petLocation } from "../../hooks/hooks";
import { Label } from "../../ui/Label/Label";
import { Paragraph } from "../../ui/Texts/Paragraph/Paragraph";
import styles from "./Mapbox.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibWFyY29zcmV1cXVlbiIsImEiOiJja3UxbXBzbHQzejJvMnBwcW4yN3pqemZuIn0.z65srWhOb5sS3GilPljOpw";

type Mapbox = {
  type: string;
};

export function Mapbox({ type }: Mapbox) {
  const mapRef = useRef();
  const geoRef = useRef<HTMLDivElement>();
  const pet = useRecoilValue(petData);
  const setPetLocation = useSetRecoilState(petLocation);

  useEffect(() => {
    if (mapRef.current && geoRef.current) {
      mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

      const center =
        type === "edit" ? [pet.longitude, pet.latitude] : [-74.5, 40];

      const map = new mapboxgl.Map({
        container: mapRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [center[0], center[1]],
        zoom: 9,
        attributionControl: false,
      });

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });

      geoRef.current.appendChild(geocoder.onAdd(map));

      if (type === "edit") {
        const inputEl = geoRef.current.querySelector(
          ".mapboxgl-ctrl-geocoder--input"
        ) as HTMLInputElement;
        inputEl.defaultValue = pet.location;
      }

      geocoder.on("result", (event) => {
        setPetLocation({
          location: event.result.place_name,
          longitude: event.result.geometry.coordinates[0],
          latitude: event.result.geometry.coordinates[1],
        });
      });

      return () => {
        geocoder.onRemove();
      };
    }
  }, []);

  return (
    <div>
      <div ref={mapRef} className={styles.mapbox__map}></div>
      <Paragraph className={styles.mapbox__text}>
        Buscá un punto de referencia para reportar la mascota. Por ejemplo, la
        ubicación donde lo viste por última vez.
      </Paragraph>
      <Label>UBICACIÓN</Label>
      <div ref={geoRef} className={styles.mapbox__geocoder}></div>
    </div>
  );
}
