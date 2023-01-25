import { CardProps } from '@/types';
import {
  easeIn,
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const Card = ({ data, active, removeCard }: CardProps) => {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const input = [-200, 0, 200];
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -125, 0, 125, 200], [0, 1, 1, 1, 0]);

  const dragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 100) {
      setExitX(200);
      removeCard(data.id, 'right');
    } else if (info.offset.x < -100) {
      setExitX(-200);
      removeCard(data.id, 'left');
    }
  };

  return (
    <>
      {active ? (
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          className="text-3xl flex justify-center items-center font-bold w-[289px] h-[438px] card absolute z-30"
          onDragEnd={dragEnd}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{
            scale: 1.05,
            opacity: 1,
          }}
          style={{ x, rotate, opacity }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeIn' }}
          whileDrag={{ cursor: 'grabbing' }}
          exit={{ x: exitX }}
        >
          <div className="w-[calc(100%-20px)] m-auto h-[calc(100%-20px)] overflow-y-scroll rounded-[20px] border-2 border-[#9F9F9F80] absolute scrollCards">
            <div className="w-full h-[269px] overflow-hidden rounded-b-xl relative">
              <Image
                src={data.src}
                fill
                alt=""
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="flex justify-between items-center text-textGrey font-medium font-sans text-2xl mt-6 px-4">
              <p>{data.name}</p>
              <p>{data.age}</p>
            </div>
            <p className="font-sans text-textGrey px-4 mt-3 font-medium text-lg">
              {data.bio}
            </p>
            <div className="flex gap-1 font-normal text-base px-4 mt-3">
              {data.genre.map((item, idx) => (
                <p key={idx} className="rounded-[7px] bg-[#00423E] px-4 py-2">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-5 text-xl font-medium px-4">Top Tracks</p>
            <div className="grid grid-cols-2 gap-4 px-4 mt-3 mb-4">
              {data.tracks.map((track, id) => {
                return (
                  <div key={id}>
                    <Image
                      src={track.img}
                      width={100}
                      height={100}
                      alt=""
                      className="rounded-lg"
                    />
                    <p className="mt-2 ml-1 text-textGrey text-sm font-medium">
                      {track.name}
                    </p>
                    <p className="ml-1 text-textGrey text-xs font-normal">
                      {track.artist}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default Card;
