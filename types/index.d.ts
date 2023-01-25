import { StaticImageData } from 'next/image';

type TracksData = {
  name: string;
  artist: string;
  img: string;
};

export type CardData = {
  id: number;
  name: string;
  src: StaticImageData;
  age: number;
  bio: string;
  genre: string[];
  tracks: TracksData[];
};

export type CardProps = {
  data: CardData;
  active: boolean;
  removeCard: (id: number, action: 'right' | 'left') => void;
};
