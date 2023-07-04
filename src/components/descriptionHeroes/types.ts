export interface HeroProps {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    }
  }