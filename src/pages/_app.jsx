import { useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import ScrollToTop from '../components/ScrollToTop';
import 'styles/tailwind.css';
import 'styles/index.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
