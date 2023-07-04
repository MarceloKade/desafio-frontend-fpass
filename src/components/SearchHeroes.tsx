'use client'
import React, { useState } from 'react';
import { Hero } from '@/interfaces/heroes';
import { searchHeroes } from '@/services/api/marvel';
import * as S from './search/styles';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [heroes, setHeroes] = useState<Hero[]>([]);

    const handleSearch = async () => {
        try {
            const result = await searchHeroes();
            const filteredHeroes = result.filter((hero) =>
                hero.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setHeroes(filteredHeroes);
        } catch (error) {
            console.log('Erro ao buscar heróis:', error);
        }
    };

    return (
        <>
            <S.Container>
                <S.InputSearch
                    placeholder='Search you hero'
                    title="Search you hero"
                    type="text"
                    value={searchTerm}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSearchTerm(e.target.value)}
                />
                <S.ButtonSearch type="button" onClick={handleSearch}>
                    Search
                </S.ButtonSearch>
            </S.Container>


            {heroes.map(({ id, name, thumbnail }) => (
                <S.ContainerCard key={id}>
                    <S.Card>
                        <S.Name>{name}</S.Name>
                        <S.CardImage src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
                        <S.Glow></S.Glow>
                    </S.Card>
                </S.ContainerCard>
            ))}
        </>
    );
}
