import axios from "axios";

const apikey = "71fd31b51107eb5002a703cc77b469c8";
const baseUrl = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/original";

const apiAxios = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apikey,
  },
});

export default apiAxios;
