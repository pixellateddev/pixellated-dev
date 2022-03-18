import '../styles/globals.scss'

import { SessionProvider } from 'next-auth/react'

import { LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterMoment'
import { CssBaseline, ThemeProvider } from '@mui/material'

import Layout from '../components/layout'
import ResumeProvider from '../state/resume'
import theme from '../theme'

import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={DateAdapter}>
          <Layout>
            <ResumeProvider>
              <Component {...pageProps} />
            </ResumeProvider>
          </Layout>
        </LocalizationProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
