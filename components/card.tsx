import { CardProps } from '@/types';
import {
  easeIn,
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useState } from 'react';

const Card = ({ data, active, removeCard }: CardProps) => {
  const [swipe, setSwipe] = useState<'right' | 'left' | 'none'>('none');
  const [exitX, setExitX] = useState(0);
  const [exitY, setExitY] = useState(0);

  // this is for the colored text animation
  const x = useMotionValue(0);
  const input = [-200, 0, 200];
  const colorOutput = ['rgb(211, 9, 225)', 'rgb(68, 0, 255)', 'rgb(3, 209, 0)'];
  const color = useTransform(x, input, colorOutput);

  const dragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 100) {
      setSwipe('right');
      setExitX(1000);
      setExitY(100);
      removeCard(data.id, 'right');
    } else if (info.offset.x < -100) {
      setSwipe('left');
      setExitX(-1000);
      setExitY(100);
      removeCard(data.id, 'left');
    }
  };

  return (
    <>
      {active ? (
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          className="text-3xl flex justify-center items-center font-bold w-[289px] h-[438px] card absolute z-30"
          onDragEnd={dragEnd}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{
            scale: 1.05,
            opacity: 1,
          }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeIn' }}
          style={{ x, color }}
          exit={{ x: exitX, y: exitY, opacity: 0 }}
        >
          {data.name}
        </motion.div>
      ) : null}
    </>
  );
};

export default Card;
