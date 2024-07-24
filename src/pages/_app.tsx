import type { AppProps } from 'next/app';
import { Raleway } from 'next/font/google';

import '@/styles/globals.css';
const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  );
}
