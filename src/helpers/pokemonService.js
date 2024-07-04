import axios from "axios";
import { Config } from "@/helpers/config.js";
const getPokemon = async () => {
  try {
    const randomId = Math.floor(Math.random() * 500) + 1;
    const response = await axios.get(`${Config.GET_POKEMON}/${randomId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
};

export default getPokemon;
