
import { AppProps } from 'next/app';

import '../styles/global.scss';

import { Header }  from "./../components/Header/index";

import { Provider as NextAuthProvider } from "next-auth/client";

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  "client-id": "Afh0fLor_H_OAJ3AUX26Ph9s8XGaO_ddeq9BjaaRIO41-N5Vc2iwtJu29AoHAYlqcm2QbBF4LfPsTWbM",
  currency: "BRL",
  intent: 'capture'
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
      <Header/>
      <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
  
  
}

export default MyApp
