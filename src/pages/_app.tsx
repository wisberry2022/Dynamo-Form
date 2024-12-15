import { PageWithLayout } from "@/6_shared";
import "@/styles/reset.css";
import type { AppProps } from "next/app";
type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
