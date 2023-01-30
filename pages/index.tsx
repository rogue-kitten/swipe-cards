import Card from '@/components/card';
import { CardData } from '@/types';
import { cardData } from '@/utils/data';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import Lights from '../public/lights.png';

export default function Home() {
  const [cards, setCards] = useState<CardData[]>(cardData);
  const [rightSwipe, setRightSwipe] = useState(0);
  const [leftSwipe, setLeftSwipe] = useState(0);

  const activeIndex = cards.length - 1;
  const removeCard = (id: number, action: 'right' | 'left') => {
    setCards((prev) => prev.filter((card) => card.id !== id));
    if (action === 'right') {
      setRightSwipe((prev) => prev + 1);
    } else {
      setLeftSwipe((prev) => prev + 1);
    }
  };

  const stats = [
    {
      name: 'Left',
      count: leftSwipe,
    },
    {
      name: 'Right',
      count: rightSwipe,
    },
  ];

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-clip bg-bgBlack text-textGrey">
      <div className="absolute bottom-0 h-[50%] w-screen scale-125 sm:h-[80%] sm:scale-110 md:scale-100">
        <Image
          src={Lights}
          fill
          alt=""
          className="relative -mt-6 h-auto w-[100%] sm:mt-1"
        />
      </div>
      <AnimatePresence>
        {cards.length ? (
          cards.map((card) => (
            <Card
              key={card.id}
              data={card}
              active={card.id === activeIndex}
              removeCard={removeCard}
            />
          ))
        ) : (
          <h2 className="absolute z-10 text-center text-2xl font-bold text-textGrey ">
            Excessive swiping can be injurious to health!
            <br />
            Come back tomorrow for more
          </h2>
        )}
      </AnimatePresence>
      {/* <div className="absolute bottom-6 flex space-x-8 items-center  text-slate-200">
        {stats.map((stat) => (
          <div key={stat.name} className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 flex justify-center items-center text-slate-800 rounded-full bg-slate-200">
              {stat.count}
            </div>
            <p className="font-semibold text-slate-400 text-lg">{stat.name}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
