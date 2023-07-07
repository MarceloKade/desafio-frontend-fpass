import { useState, useRef } from 'react';
import { Hero } from '@/interfaces/heroes';
import { searchHeroes } from '@/services/api/marvel';

export const useSearchHeroes = () => {
  const searchTermRef = useRef('');
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTermRef.current.toLowerCase())
  );

  const handleSearch = async () => {
    try {
      let offset = 0;
      let allHeroes: Hero[] = [];
      let nameFound = false;

      if (searchTermRef.current === '') {
        while (true) {
          const result = await searchHeroes(100, offset);
          if (result.length === 0) {
            break;
          }
          allHeroes = allHeroes.concat(result);
          offset += 500;
        }
      } else {
        while (!nameFound && offset < 5000) {
          const result = await searchHeroes(100, offset);
          if (result.length === 0) {
            break;
          }

          const filteredHeroes = result.filter((hero) =>
            hero.name.toLowerCase().includes(searchTermRef.current.toLowerCase())
          );
          if (filteredHeroes.length > 0) {
            nameFound = true;
            allHeroes = filteredHeroes;
          }

          offset += 500;
        }
      }

      if (!nameFound) {
      }

      setHeroes(allHeroes);
    } catch (error) {
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClickSearch = () => {
    handleSearch();
  };

  const handleChangeSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchTermRef.current = event.target.value;
  };

  const noResultsMessage = "Nenhum herói encontrado.";


  return {
    heroes,
    handleKeyPress,
    handleClickSearch,
    handleChangeSearchTerm,
    searchTerm: searchTermRef.current,
    filteredHeroes,
    noResultsMessage,
  };
};
