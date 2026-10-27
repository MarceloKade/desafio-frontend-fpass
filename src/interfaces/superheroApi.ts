export interface SuperheroApi {
  id: number;
  name: string;
  biography: {
    fullName: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
  };
  images: {
    md: string;
  };
}
