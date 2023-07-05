'use client'
import React, { useState, useEffect } from 'react';
import { searchHeroes } from '../services/api/marvel';
import { Hero } from '@/interfaces/heroes';
import Heroes from './listHeroes/Heroes';
import * as M from './listHeroes/styles';
import Link from "next/link";

export default function Main() {
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

    useEffect(() => {
        fetchHeroes(offset);
    }, [offset]);

    const handleClickNext = () => {
        setOffset((prevOffset) => prevOffset + 20);
    };

    const handleClickBack = () => {
        if (offset > 0) {
            setOffset((prevOffset) => prevOffset - 20);
        }
    };

    return (
        <>
            <M.MainContainer>
                {heroes.map(({ id, name, thumbnail }) => (
                    <div key={id}>
                        <Link href={`/description/${id}`}>
                            <Heroes name={name} thumbnail={thumbnail} />
                        </Link>
                    </div>
                ))}
            </M.MainContainer>
            <M.ButtonContainer>
                <M.ButtonBack onClick={handleClickBack}>&lt; Back page </M.ButtonBack>
                <M.ButtonNext onClick={handleClickNext}>Next page &gt;</M.ButtonNext>
            </M.ButtonContainer>
        </>
    );
}