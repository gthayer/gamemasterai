import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react'
import { Libre_Baskerville } from '@next/font/google'

const librebaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-librebaskerville',
  weight: '400'
})

export default function App({ 
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <div className={`${librebaskerville.variable}`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
