import Card from '@/components/card';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800 shadow-xl relative">
      <AnimatePresence>
        <Card />
        <Card />
        <Card />
      </AnimatePresence>
    </div>
  );
}
