import { useState, useEffect } from 'react';
import { searchHeroes } from '@/services/api/marvel';
import { Hero } from '@/interfaces/heroes';

export function useHeroDescription(id: number) {
    const [hero, setHero] = useState<Hero | null>(null);

    useEffect(() => {
        const getHeroData = async () => {
            try {
                let offset = 0;
                let selectedHero: Hero | undefined;

                while (!selectedHero) {
                    const heroData = await searchHeroes(100, offset);
                    selectedHero = heroData.find((hero: Hero) => hero.id === id);
                    offset += 100;
                }

                setHero(selectedHero || null);
            } catch (error) {
                console.log('Erro ao buscar dados do herói', error);
            }
        };

        if (typeof id === 'number') {
            getHeroData();
        }
    }, [id]);

    return {
        hero
    };
}
