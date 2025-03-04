import axios from "axios";
import { VITE_API_ENDPOINT } from "@/configs/environment";

import type { AxiosInstance } from "axios";

const REQUEST: AxiosInstance = axios.create({
  baseURL: VITE_API_ENDPOINT,
});

const setInterceptor = (axiosInstance: AxiosInstance): AxiosInstance => {
  return axiosInstance;
};

setInterceptor(REQUEST);

export default REQUEST;