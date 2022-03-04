import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import { SessionProvider } from "next-auth/react"
import { UserProvider } from '../src/contexts/userContext'

function MyApp({ Component, pageProps: {
  session,
  ...pageProps
} }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <SessionProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
