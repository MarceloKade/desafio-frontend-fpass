'use client'
import React, { useEffect, useState } from 'react';
import { searchHeroes } from '@/services/api/marvel';
import { Hero } from '@/interfaces/heroes';
import * as D from '@/components/descriptionHeroes/styles';
import Header from '@/components/HeaderDescription';
import { getImageUrl } from '@/utils/utils';
import { DescriptionHeroProps } from '@/components/descriptionHeroes/types';

export default function DescriptionHero({ params }: DescriptionHeroProps) {
    const [hero, setHero] = useState<Hero | null>(null);
    const { id } = params;

    useEffect(() => {
        if (id && typeof id === 'string') {
            const heroId = parseInt(id);
            getHeroData(heroId);
        }
    }, [id]);

    const getHeroData = async (id: number) => {
        try {
            const heroData = await searchHeroes(20, 0);
            const selectedHero = heroData.find((hero: Hero) => hero.id === id);
            setHero(selectedHero || null);
        } catch (error) {
            console.log('Erro ao buscar dados do herói', error);
        }
    };

    if (!hero) {
        return <p>Loading...</p>;
    }

    return (
        <><header>
            <Header />
        </header>
            <main>
                <D.Container>
                    <D.CardContainer>
                        <D.Card>
                            <D.IMG src={getImageUrl(hero.thumbnail.path, hero.thumbnail.extension)} alt="Image Hero" />
                        </D.Card>
                    </D.CardContainer>
                    <D.ContainerContent>
                        <D.Name>{hero.name}</D.Name>
                        <D.Description>{hero.description}</D.Description>
                        <D.ContainerAbout>
                            <D.About>{hero.comics.available} quadrinhos</D.About>
                            <D.About>{hero.stories.available} histórias</D.About>
                            <D.About>{hero.events.available} eventos</D.About>
                            <D.About>{hero.series.available} series</D.About>
                        </D.ContainerAbout>

                    </D.ContainerContent>

                </D.Container>
            </main>
        </>
    );
}