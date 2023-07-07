import { Hero } from "@/interfaces/heroes";

export interface DescriptionHeroProps {
  params: {
      id: string;
  };
}

export interface HeroDescriptionProps {
  hero: Hero;
}