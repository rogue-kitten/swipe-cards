import '@/styles/globals.css';
import { Baloo_Bhaijaan_2 } from '@next/font/google';
import type { AppProps } from 'next/app';

const baloo = Baloo_Bhaijaan_2({
  subsets: ['latin'],
  variable: '--font-baloo',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${baloo.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
