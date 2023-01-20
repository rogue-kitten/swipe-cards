import Card from '@/components/card';
import { CardData } from '@/types';
import { cardData } from '@/utils/data';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [cards, setCards] = useState<CardData[]>(cardData);

  const activeIndex = cards.length - 1;
  const removeCard = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800 shadow-xl relative overflow-hidden">
      <AnimatePresence>
        {cards.map((card) => (
          <Card
            key={card.id}
            data={card}
            active={card.id === activeIndex}
            removeCard={removeCard}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
