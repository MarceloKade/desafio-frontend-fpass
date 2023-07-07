import { useState, useEffect } from 'react';
import { searchHeroes } from '../services/api/marvel';
import { Hero } from '@/interfaces/heroes';

export const useListHeroes = () => {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [offset, setOffset] = useState(0);

    const fetchHeroes = async (offset: number) => {
        try {
            const limit = window.innerWidth <= 800 ? 20 : 21;
            const result = await searchHeroes(limit, offset);
            setHeroes(result);
        } catch (error) {
            console.log('Erro ao buscar dados dos heróis', error);
        }
    };

    const handleClickNext = () => {
        setOffset((prevOffset) => prevOffset + 20);
    };

    const handleClickBack = () => {
        if (offset > 0) {
            setOffset((prevOffset) => prevOffset - 20);
        }
    };

    useEffect(() => {
        fetchHeroes(offset);
    }, [offset]);

    return { heroes, handleClickNext, handleClickBack };
};