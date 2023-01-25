import { StaticImageData } from 'next/image';
import { SetStateAction } from 'react';

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

export type SwipeButtonProps = {
  exit: (value: SetStateAction<number>) => void;
  removeCard: (id: number, action: 'right' | 'left') => void;
  id: number;
};
