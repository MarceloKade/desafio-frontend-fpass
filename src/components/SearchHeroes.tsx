'use client'

import React from 'react';
import * as S from './search/styles';
import { useSearchHeroes } from '@/utils/searchHeroes';
import Link from "next/link";
import useCardHover from '@/utils/cardHoverHeroes';
import Heroes from './listHeroes/Heroes';

export default function SearchHeroes() {
    const {
        handleKeyPress,
        handleClickSearch,
        handleChangeSearchTerm,
        filteredHeroes,
        searchTerm,
        noResultsMessage
    } = useSearchHeroes();

    const { cardRef, handleMouseMove, handleMouseLeave } = useCardHover();

    return (
        <>
            <S.Container>
                <S.InputSearch
                    placeholder="Search your hero"
                    title="Search"
                    type="text"
                    defaultValue={searchTerm}
                    onChange={handleChangeSearchTerm}
                    onKeyDown={handleKeyPress}
                />
                <S.ButtonSearch type="button" onClick={handleClickSearch}>
                    Search
                </S.ButtonSearch>
            </S.Container>

            {(searchTerm === '' || filteredHeroes.length > 0) ? (
                <>
                    {filteredHeroes.map(({ id, name, thumbnail }) => (
                        <S.ContainerCard key={id} >
                            <Link href={`/description/${id}`}>
                                <Heroes name={name} thumbnail={thumbnail} />
                            </Link>

                        </S.ContainerCard>
                    ))}
                </>
            ) : (
                <S.NoResultMessage>{noResultsMessage}</S.NoResultMessage>
            )}
        </>
    );
}