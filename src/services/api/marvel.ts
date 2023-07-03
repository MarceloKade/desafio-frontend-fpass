import { Hero } from '@/interfaces/heroes';
import crypto from 'crypto';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const publicKey = process.env.NEXT_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const ts = Date.now().toString();
const hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');

export const searchHeroes = async (): Promise<Hero[]> => {
  try {
    const response = await axios.get(`${baseUrl}/characters`, {
      params: {
        limit: 20,
        offset: 0,
        apikey: publicKey,
        ts: ts,
        hash: hash,
      },
    });

    return response.data.data.results;
  } catch (error) {
    console.error('Erro ao buscar heróis:', error);
    throw error;
  }
};