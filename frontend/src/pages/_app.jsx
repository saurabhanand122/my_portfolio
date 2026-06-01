import { useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import ScrollToTop from '../components/ScrollToTop';
import 'styles/tailwind.css';
import 'styles/index.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    if (process.env.NODE_ENV !== 'production') {
      Promise.all([
        navigator.serviceWorker.getRegistrations()
          .then((registrations) => Promise.all(
            registrations.map((registration) => registration.unregister())
          )),
        'caches' in window
          ? caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => caches.delete(cacheName))
          ))
          : Promise.resolve(),
      ])
        .catch((error) => {
          console.log('SW cleanup failed: ', error);
        });
      return;
    }

    const registerServiceWorker = () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    };

    if (document.readyState === 'complete') {
      registerServiceWorker();
      return;
    }

    window.addEventListener('load', registerServiceWorker);

    return () => {
      window.removeEventListener('load', registerServiceWorker);
    };
  }, []);

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
