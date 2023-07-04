'use client'
import * as M from './styles'
import React, { useRef } from 'react';
import { HeroProps } from "./types";
import { getImageUrl } from '@/utils/utils';

export default function Hero({ name, thumbnail: { path, extension } }: HeroProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (el) {
            const elRect = el.getBoundingClientRect();
            const x = e.clientX - elRect.x;
            const y = e.clientY - elRect.y;
            const midCardWidth = elRect.width / 2;
            const midCardHeight = elRect.height / 2;
            const angleY = -(x - midCardWidth) / 16;
            const angleX = (y - midCardHeight) / 16;
            (el.children[0] as HTMLElement).style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        }
    };

    const handleMouseLeave = () => {
        const el = cardRef.current;
        if (el) {
            (el.children[0] as HTMLElement).style.transform = 'rotateX(0) rotateY(0)';
        }
    };
    return (
        <M.CardContainer ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <M.Card>
                <M.CardImage src={getImageUrl(path, extension)} alt={name} />
                <M.Name>{name}</M.Name>
                <M.Glow></M.Glow>
            </M.Card>
        </M.CardContainer>
    )
}