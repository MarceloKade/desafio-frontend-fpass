import axios from "axios";
import { Hero } from "@/interfaces/heroes";

export const searchHeroes = async (
  limit: number,
  offset: number,
): Promise<Hero[]> => {
  try {
    const response = await axios.get<Hero[]>("/api/heroes", {
      params: {
        limit,
        offset,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar heróis:", error);
    throw error;
  }
};
