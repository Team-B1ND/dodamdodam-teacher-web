import { ProvidersProps } from "./types";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../../styles/GlobalStyles";
import Layout from "../Layout";
import Header from "../Header";
import SideBar from "../SideBar";
import { OverlayProvider } from "@toss/use-overlay";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 1000,
    },
  },
});

const Providers = ({ children }: ProvidersProps) => {
  const isAuth = window.location.pathname === "/";
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <OverlayProvider>
          <GlobalStyles />
          <B1ndToastContainer />
          <BrowserRouter>
            {isAuth ? null : <Header />}
            {isAuth ? null : <SideBar />}
            <Layout>{children}</Layout>
          </BrowserRouter>
        </OverlayProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Providers;
