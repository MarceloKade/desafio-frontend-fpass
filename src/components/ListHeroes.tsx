'use client'
import React, { useState, useEffect } from 'react';
import { searchHeroes } from '../services/api/marvel';
import { Hero } from '@/interfaces/heroes';
import Heroes from './listHeroes/Heroes';
import * as M from './listHeroes/styles';
import Link from "next/link";

export default function Main() {
    const [heroes, setHeroes] = useState<Hero[]>([]);

    const fetchHeroes = async () => {
        try {
            const result = await searchHeroes();
            setHeroes(result);
        } catch (error) {
            console.log('Erro ao buscar dados dos heróis', error);
        }
    };

    useEffect(() => {
        fetchHeroes();
    }, []);

    return (
        <>
            <M.MainContainer>
                {heroes.map(({ id, name, thumbnail }) => (
                    <div key={id}>
                        <Link href={`/description/${id}`} >
                            <Heroes name={name} thumbnail={thumbnail} />
                        </Link>
                    </div>
                ))}
            </M.MainContainer>
        </>
    );
}