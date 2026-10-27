import { useState, useEffect } from "react";
import { searchHeroes } from "@/services/api/marvel";
import { Hero } from "@/interfaces/heroes";

export function useHeroDescription(id: number) {
  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    let cancelled = false;

    const getHeroData = async () => {
      try {
        let offset = 0;
        let selectedHero: Hero | undefined;

        while (!selectedHero) {
          const heroes = await searchHeroes(100, offset);

          if (heroes.length === 0) {
            break;
          }

          selectedHero = heroes.find((item) => item.id === id);
          offset += heroes.length;
        }

        if (!cancelled) {
          setHero(selectedHero ?? null);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do herói:", error);

        if (!cancelled) {
          setHero(null);
        }
      }
    };

    getHeroData();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return { hero };
}
