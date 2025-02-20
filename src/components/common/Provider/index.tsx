import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { B1ndToastContainer } from '@b1nd/b1nd-toastify'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyles'
import { OverlayProvider } from '@toss/use-overlay'
import PageTemplate from '../PageTemplate'
import Router from '../../Router'
import { DodamThemeProvider } from '@b1nd/dds-web'

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
})

const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DodamThemeProvider theme='LIGHT'>
        <RecoilRoot>
          <OverlayProvider>
            <GlobalStyles />
            <B1ndToastContainer />
              <BrowserRouter basename='/teacher'>
                <PageTemplate>
                  <Router />
                </PageTemplate>
              </BrowserRouter>
          </OverlayProvider>
        </RecoilRoot>
      </DodamThemeProvider>
    </QueryClientProvider>
  )
}

export default Providers
