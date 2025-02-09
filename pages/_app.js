import '@/styles/globals.css'
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import Header from '/components/Header.js'
import Footer from '/components/Footer.js'
import { Analytics } from '@vercel/analytics/react';

import '@fontsource/comfortaa'
import '@fontsource/oswald'
import theme from '../theme'

export default function App({ Component, pageProps }) {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer></Footer>
      <Analytics />
    </ChakraProvider>
  )
}
