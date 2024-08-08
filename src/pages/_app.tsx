import type { AppProps } from 'next/app';
import { Open_Sans as OpenSans } from 'next/font/google';

import '@/styles/globals.css';
const openSans = OpenSans({
  weight: '400',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
