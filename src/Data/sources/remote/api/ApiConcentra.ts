import axios, { AxiosHeaders } from "axios";
import { LocalStorage } from "../../local/LocalStorage";
import { User } from "../../../../Domain/entities/User";

const ApiConcentra = axios.create({
  baseURL: "http://192.168.100.39:3000/api",
  headers: {
    "content-type": "application/json",
  },
});

const ApiConcentraForImage = axios.create({
  baseURL: "http://192.168.100.39:3000/api",
  headers: {
    "Content-type": "multipart/form-data",
    accept: "application/json",
  },
});

ApiConcentra.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: User = JSON.parse(data);
    (config.headers as AxiosHeaders).set(
      "Authorization",
      `${user?.session_token}`
    );
  }
  return config;
});

ApiConcentraForImage.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: User = JSON.parse(data);
    (config.headers as AxiosHeaders).set(
      "Authorization",
      `${user?.session_token}`
    );
  }
  return config;
});


export { ApiConcentra , ApiConcentraForImage };
