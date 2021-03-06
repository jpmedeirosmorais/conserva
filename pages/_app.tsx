import type { AppProps } from "next/app";
import { AppProvider } from "../hooks/AppProvider";
// import "../common/styles/global.css";
import GlobalStyles from '../common/styles/global';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <>
        <Component {...pageProps} />
        <GlobalStyles/>
      </>
    </AppProvider>
  );
}

export default MyApp;
