'use client'
import React from 'react';
import HeaderDescription from '@/components/HeaderDescription';
import { DescriptionHeroProps } from '@/components/descriptionHeroes/types';
import { useHeroDescription } from '@/utils/heroDescription';
import HeroDescription from '@/components/HeroDescription';

export default function DescriptionHero({ params }: DescriptionHeroProps) {
    const { id } = params;
    const { hero } = useHeroDescription(parseInt(id));

    if (!hero) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <header>
                <HeaderDescription />
            </header>
            <main>
                <HeroDescription hero={hero} />
            </main>
        </>
    );
}
