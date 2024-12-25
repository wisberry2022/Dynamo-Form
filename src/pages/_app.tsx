import { CommonComponentProvider, PageWithLayout } from "@/6_shared";
import { axiosInstance } from "@/6_shared/api/core/axiosInstance";
import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";
type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <SWRConfig
        value={{
          dedupingInterval: 5000,
          fetcher: (resource, init) =>
            axiosInstance.get(resource, init).then((res) => res.data),
        }}
      >
        <CommonComponentProvider>
          {getLayout(<Component {...pageProps} />)}
        </CommonComponentProvider>
      </SWRConfig>
    </RecoilRoot>
  );
}
