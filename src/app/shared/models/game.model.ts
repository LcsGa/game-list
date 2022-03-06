export interface Game {
  title: string;
  platforms: Chip[];
  imageURL: string;
  text: string;
}

export interface Chip {
  platform?: string;
  label?: string;
}
