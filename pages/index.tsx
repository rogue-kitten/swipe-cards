import Card from '@/components/card';
import { CardData } from '@/types';
import { cardData } from '@/utils/data';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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
    <div className="w-full h-screen flex justify-center items-center text-textGrey bg-bgBlack overflow-hidden">
      <div className="blur-lines w-full rounded-full h-[200px] top-[313px] absolute z-10" />
      <div className="w-full flex items-start h-[505px] absolute top-[434px]">
        <div className="w-1/2 h-full line-gradient-left"></div>
        <div className="w-1/2 h-full line-gradient-right"></div>
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
          <h2 className="text-2xl z-10 text-center font-bold text-textGrey ">
            Excessive swiping can be injurious to health!
            <br />
            Come back tomorrow for more
          </h2>
        )}
      </AnimatePresence>
    </div>
  );
  //   <div className="w-full h-screen flex justify-center items-center bg-bgBlack shadow-xl relative overflow-hidden">
  // <AnimatePresence>
  //   {cards.length ? (
  //     cards.map((card) => (
  //       <Card
  //         key={card.id}
  //         data={card}
  //         active={card.id === activeIndex}
  //         removeCard={removeCard}
  //       />
  //     ))
  //   ) : (
  //     <h2 className="text-2xl text-center font-bold text-textGrey ">
  //       Excessive swiping can be injurious to health!
  //       <br />
  //       Come back tomorrow for more
  //     </h2>
  //   )}
  // </AnimatePresence>
  //     <div className="absolute bottom-6 flex space-x-8 items-center  text-slate-200">
  //       {stats.map((stat) => (
  //         <div key={stat.name} className="flex flex-col items-center space-y-3">
  //           <div className="w-12 h-12 flex justify-center items-center text-slate-800 rounded-full bg-slate-200">
  //             {stat.count}
  //           </div>
  //           <p className="font-semibold text-slate-400 text-lg">{stat.name}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
}
