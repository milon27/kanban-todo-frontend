import { EnvConfig } from "@/config/env.config";
import axios from "axios";

export const ApiService = axios.create({
  baseURL: EnvConfig.API_URL,
  withCredentials: true,
  timeout: 1000,
});
