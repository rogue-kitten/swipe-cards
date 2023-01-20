export type CardData = {
  id: number;
  name: string;
};

export type CardProps = {
  data: CardData;
  active: boolean;
  removeCard: (id: number, action: 'right' | 'left') => void;
};
