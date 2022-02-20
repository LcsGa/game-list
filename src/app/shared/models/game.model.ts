export interface Game {
  title: string;
  platforms: Chip[];
  imgUrl: string;
  text: string;
}

export interface Chip {
  platform: string;
  label?: string;
}
