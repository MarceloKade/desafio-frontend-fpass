import axios from 'axios';

interface Thumbnail {
  path: string;
  extension: string;
}

export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}

const API_BASE_URL = 'https://gateway.marvel.com/v1/public';
const API_KEY = '1c184ef09d4827dbf492e99829ca231c';

export const searchHeroes = async (name: string): Promise<Hero[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters`, {
      params: {
        apikey: API_KEY,
        nameStartsWith: name,
      },
    });

    return response.data.data.results;
  } catch (error) {
    console.error('Erro ao buscar heróis:', error);
    throw error;
  }
};