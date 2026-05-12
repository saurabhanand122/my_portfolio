import ErrorBoundary from 'components/ErrorBoundary';
import ScrollToTop from 'components/ScrollToTop';
import 'styles/tailwind.css';
import 'styles/index.css';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
