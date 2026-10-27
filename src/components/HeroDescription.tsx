import React from "react";
import * as D from "@/components/descriptionHeroes/styles";
import { getImageUrl } from "@/utils/imageNotFound";
import { HeroDescriptionProps } from "../interfaces/descriptionHeroesTypes";

export default function HeroDescription({ hero }: HeroDescriptionProps) {
  return (
    <D.Container>
      <D.CardContainer>
        <D.Card>
          <D.IMG
            src={getImageUrl(hero.thumbnail.path, hero.thumbnail.extension)}
            alt={hero.name}
          />
        </D.Card>
      </D.CardContainer>

      <D.ContainerContent>
        <D.Name>{hero.name}</D.Name>

        <D.Description>
          {hero.description || "Descrição não disponível."}
        </D.Description>
      </D.ContainerContent>
    </D.Container>
  );
}
