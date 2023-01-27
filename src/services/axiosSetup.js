import axios from "axios";

export const API_URL = "https://axiomatic-sunset-beluga.glitch.me"

export const api = axios.create({ baseURL: API_URL })