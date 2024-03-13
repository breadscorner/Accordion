import { AppProps } from 'next/app';
import CustomErrorComponent from '../components/error/error';
import LoadingSpinner from '../components/error/loadingSpinner';
import { Suspense } from 'react';
import Layout from "../layout";
import { Metadata } from 'next';

// Move to layout but import as server side comp
export const metadata: Metadata = {
  title: {
    template: 'Brett Gill | %',
    default: 'Accordion',
  },
  description: 'Accordion Component for Next.js',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomErrorComponent>
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </CustomErrorComponent>
  );
}
