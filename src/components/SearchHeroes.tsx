'use client'

import React from 'react';
import { getImageUrl } from '@/utils/imageNotFound';
import * as S from './search/styles';
import { useSearchHeroes } from '@/utils/searchHeroes';

export default function SearchHeroes() {
    const {
        handleKeyPress,
        handleClickSearch,
        handleChangeSearchTerm,
        filteredHeroes,
        searchTerm,
        noResultsMessage
    } = useSearchHeroes();

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
                        <S.ContainerCard key={id}>
                            <S.Card>
                                <S.CardImage
                                    src={getImageUrl(thumbnail.path, thumbnail.extension)}
                                    alt={name}
                                />
                                <S.Name>{name}</S.Name>
                                <S.Glow></S.Glow>
                            </S.Card>
                        </S.ContainerCard>
                    ))}
                </>
            ) : (
                <S.NoResultMessage>{noResultsMessage}</S.NoResultMessage>
            )}
        </>
    );
}