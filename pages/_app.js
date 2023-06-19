import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/media-query";
import Header from '/components/Header.js'
import Footer from '/components/Footer.js'
import Deal from '/components/Deal.js'

import '@fontsource/comfortaa'
import theme from '../theme'

export default function App({ Component, pageProps }) {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <ChakraProvider theme={theme}>
      <Deal />
      <Header />
      <Component {...pageProps} />
      <Footer></Footer>
    </ChakraProvider>
  )
}
