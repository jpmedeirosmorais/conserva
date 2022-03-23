import type { AppProps } from "next/app";
import { AppProvider } from "../hooks/AppProvider";
import "../common/styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <>
        <Component {...pageProps} />
      </>
    </AppProvider>
  );
}

export default MyApp;
