'use client'
import React from 'react';
import Heroes from './listHeroes/Heroes';
import * as M from './listHeroes/styles';
import Link from "next/link";
import { useListHeroes } from '@/utils/listHeroes';

export default function ListHeroes() {
    const { heroes, handleClickNext, handleClickBack } = useListHeroes();

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