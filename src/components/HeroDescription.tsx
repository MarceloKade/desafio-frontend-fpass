import React from 'react';
import * as D from '@/components/descriptionHeroes/styles';
import { getImageUrl } from '@/utils/imageNotFound';
import { HeroDescriptionProps } from './descriptionHeroes/types';

export default function HeroDescription({ hero }: HeroDescriptionProps) {
    return (
        <D.Container>
            <D.CardContainer>
                <D.Card>
                    <D.IMG
                        src={getImageUrl(hero.thumbnail.path, hero.thumbnail.extension)}
                        alt="Image Hero"
                    />
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
    );
};

