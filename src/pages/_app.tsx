
import { AppProps } from 'next/app';

import '../styles/global.scss';

import { Header }  from "./../components/Header/index";

import { Provider as NextAuthProvider } from "next-auth/client";

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  "client-id": "AW4z7e14lKuOOuyzPXH-UpGDXWBFPP3v837zDFX9Ijt1WSKyjp1IjEq0ngyH_cvO1FOEexYesY8i8xjG",
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
