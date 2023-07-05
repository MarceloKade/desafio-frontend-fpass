'use client'

import React, { useState } from 'react';
import { Hero } from '@/interfaces/heroes';
import { searchHeroes } from '@/services/api/marvel';
import { getImageUrl } from '@/utils/utils';
import * as S from './search/styles';

export default function SearchHeroes() {
    const [searchTerm, setSearchTerm] = useState('');
    const [heroes, setHeroes] = useState<Hero[]>([]);

    const handleSearch = async () => {
        try {
            const result = await searchHeroes(20, 0);
            const filteredHeroes = result.filter((hero) =>
                hero.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setHeroes(filteredHeroes);
        } catch (error) {
            console.log('Erro ao buscar heróis:', error);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <S.Container>
                <S.InputSearch
                    placeholder='Search you hero'
                    title="Search"
                    type="text"
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <S.ButtonSearch type="button" onClick={handleSearch}>
                    Search
                </S.ButtonSearch>
            </S.Container>


            {heroes.map(({ id, name, thumbnail }) => (
                <S.ContainerCard key={id}>
                    <S.Card>
                        <S.Name>{name}</S.Name>
                        <S.CardImage src={getImageUrl(thumbnail.path, thumbnail.extension)} alt={name} />
                        <S.Glow></S.Glow>
                    </S.Card>
                </S.ContainerCard>
            ))}
        </>
    );
}
