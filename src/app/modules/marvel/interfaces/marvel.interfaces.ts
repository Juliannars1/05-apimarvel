export interface MarvelApiResponse {
  count: number;
  next: null;
  previous: null;
  data: {
    results: Character[];
  };
}
export interface SmallCharacter {
  id: number;
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  thumbnail: { extension: string; path: string };
}
