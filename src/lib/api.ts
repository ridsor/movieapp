import axios from "axios";

const apikey = "71fd31b51107eb5002a703cc77b469c8";
const baseUrl = "https://api.themoviedb.org/3";

const apiAxios = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apikey,
  },
});

export default apiAxios;
