import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import thumbnailImg from "../../../assets/images/thumbnail.svg";
import {
  lostPets,
  lostPetsAround,
  petData,
  petLocation,
  userPets,
  userToken,
} from "../../../hooks/hooks";
import {
  deletePet,
  newLostPet,
  updateLostPet,
  updatePetStatus,
} from "../../../lib/api";
import { Button } from "../../../ui/Button/Button";
import { Input } from "../../../ui/Input/Input";
import { Label } from "../../../ui/Label/Label";
import { Paragraph } from "../../../ui/Texts/Paragraph/Paragraph";
import { Mapbox } from "../../Mapbox/Mapbox";
import formStyles from "../Forms.css";
import styles from "./ReportForm.css";

type ReportForm = {
  className: string;
  type: string;
};

export function ReportForm({ className, type }: ReportForm) {
  const navigate = useNavigate();
  const refreshPets = useRecoilRefresher_UNSTABLE(lostPets);
  const refreshPetsAround = useRecoilRefresher_UNSTABLE(lostPetsAround);
  const refreshUserPets = useRecoilRefresher_UNSTABLE(userPets);
  const token = useRecoilValue(userToken);
  const imgRef = useRef<HTMLImageElement>();
  const { location, longitude, latitude } = useRecoilValue(petLocation);
  const pet = useRecoilValue(petData);
  const [error, setError] = useState("");

  const setThumbnail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (imgRef.current) {
          imgRef.current.src = e.target?.result as string;
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").toString();
    const dataURL = imgRef.current.src;

    try {
      if (type === "new") {
        await newLostPet({
          name,
          location,
          longitude,
          latitude,
          dataURL,
          token,
        });
        refreshUserPets();
        refreshPets();
        refreshPetsAround();
        navigate("/reports");
      }

      if (type === "edit") {
        await updateLostPet({
          petId: pet.id,
          name: name,
          location: location || pet.location,
          longitude: longitude || pet.longitude,
          latitude: latitude || pet.latitude,
          dataURL: dataURL,
          token,
        });
        refreshUserPets();
        refreshPets();
        refreshPetsAround();
        navigate("/reports");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCancelClick = () => {
    navigate("/reports");
  };

  const handleStatusClick = async () => {
    try {
      const newStatus = pet.status === "lost" ? "found" : "lost";
      await updatePetStatus({ status: newStatus, petId: pet.id, token });
      refreshPets();
      refreshPetsAround();
      refreshUserPets();
      navigate("/reports");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRemoveClick = async () => {
    try {
      await deletePet({ petId: pet.id, token });
      refreshPets();
      refreshPetsAround();
      refreshUserPets();
      navigate("/reports");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {error && <Paragraph className={formStyles.form__error}></Paragraph>}
      <Label htmlFor="name">NOMBRE</Label>
      <Input
        id="name"
        name="name"
        autoComplete="name"
        defaultValue={pet.name}
        required
      />
      <img
        ref={imgRef}
        className={styles.form__thumbnail}
        src={pet.img || thumbnailImg}
      />
      <Label className={styles.form__add} htmlFor="thumbnail">
        Agregar foto
        <input
          onChange={setThumbnail}
          className={styles.form__file}
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          required={type === "new" ? true : false}
        />
      </Label>
      <Mapbox type={type} />
      {type === "new" && (
        <div>
          <Button className={styles.form__button} color="green" type="submit">
            Reportar mascota
          </Button>
          <Button
            onClick={handleCancelClick}
            className={`${styles.form__button} ${styles["form__button--cancel"]}`}
            color="black"
          >
            Cancelar
          </Button>
        </div>
      )}
      {type === "edit" && (
        <div>
          <Button className={styles.form__button} type="submit">
            Guardar
          </Button>

          <Button
            onClick={handleStatusClick}
            className={styles.form__button}
            color="green"
          >
            Reportar como encontrado
          </Button>
          <Button
            onClick={handleRemoveClick}
            className={`${styles.form__button} ${styles["form__button--delete"]}`}
            color="red"
          >
            Eliminar reporte
          </Button>
        </div>
      )}
    </form>
  );
}
