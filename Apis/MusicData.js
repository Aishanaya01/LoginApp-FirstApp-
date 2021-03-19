import axios from "axios";

export const MusicData = axios.create({
  baseURL: "https://itunes.apple.com/",
});