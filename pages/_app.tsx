import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Layout from '../components/layout'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '../theme'
import ResumeProvider from '../state/resume'


function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <ResumeProvider>
            <Component {...pageProps} />
          </ResumeProvider>
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
