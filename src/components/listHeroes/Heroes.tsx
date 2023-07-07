'use client'
import React from 'react';
import * as M from './styles'
import { HeroProps } from "./types";
import { getImageUrl } from '@/utils/imageNotFound';
import useCardHover from '@/utils/cardHoverHeroes';

export default function Hero({ name, thumbnail: { path, extension } }: HeroProps) {
    const { cardRef, handleMouseMove, handleMouseLeave } = useCardHover();

    return (
        <M.CardContainer ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <M.Card>
                <M.CardImage src={getImageUrl(path, extension)} alt={name} />
                <M.Name>{name}</M.Name>
                <M.Glow></M.Glow>
            </M.Card>
        </M.CardContainer>
    );
}
