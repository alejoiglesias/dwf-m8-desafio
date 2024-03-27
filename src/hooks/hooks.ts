import { atom, selector } from "recoil";
import {
  getLostPets,
  getLostPetsAroundMe,
  getProfile,
  getUserPets,
} from "../lib/api";

export const menuState = atom({
  key: "menu",
  default: false,
});

export const reportMenuState = atom({
  key: "reportMenu",
  default: false,
});

export const locationState = atom({
  key: "location",
  default: JSON.parse(localStorage.getItem("location")),
});

export const petLocation = atom({
  key: "petLocation",
  default: {
    location: "",
    longitude: "",
    latitude: "",
  },
});

export const petData = atom({
  key: "petData",
  default: {
    id: "",
    name: "",
    location: "",
    longitude: 0,
    latitude: 0,
    img: "",
    status: "",
    userId: "",
  },
});

export const userToken = atom({
  key: "token",
  default: localStorage.getItem("token"),
});

export const userEmail = atom({
  key: "email",
  default: localStorage.getItem("email"),
});

export const userData = selector({
  key: "userData",
  get: async ({ get }) => {
    const token = get(userToken);

    if (!token) {
      return null;
    }

    try {
      const { fullname, location } = await getProfile({ token });
      const data = { fullname, location };
      localStorage.setItem("data", JSON.stringify(data));
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export const userPets = selector({
  key: "userPets",
  get: async ({ get }) => {
    const token = get(userToken);

    if (!token) {
      return null;
    }

    try {
      const data = await getUserPets({ token });
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export const lostPets = selector({
  key: "lostPets",
  get: async ({ get }) => {
    const token = get(userToken);

    if (!token) {
      return null;
    }

    try {
      const data = await getLostPets({ token });
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export const lostPetsAround = selector({
  key: "lostPetsAround",
  get: async ({ get }) => {
    const token = get(userToken);
    const location = get(locationState);

    if (!token) {
      return null;
    }

    if (!location) {
      return null;
    }

    try {
      const data = await getLostPetsAroundMe({
        latitude: location.latitude,
        longitude: location.longitude,
        token,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
});
