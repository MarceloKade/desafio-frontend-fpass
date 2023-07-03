export interface Hero {
  id: number;
  name: string;
  description: string;
  resourceURI: string;
  thumbnail: {
    path: string;
    extension: string;
  },
  
}