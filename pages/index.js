import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Box, Text, Divider, Heading, Flex, useMediaQuery } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    <>
    <Head>
      <title>Wandering Jade | Home</title>
    </Head>
    <Box bgColor='gray.50' px='5' pt='10'>
      { isMobile && (
          <Image
            src='/hero-mobile.png'
            height='2000'
            width='1000'
            alt='side profile of the wandering jade mobile bar'
          />
      )}

      {!isMobile && (
        <Box 
        bgImage="url('/landingBgNEW.png')"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize='cover'
        bgAttachment='fixed'
        h='345'
        align='center'
        >
          <Box align='center' display='flex' justifyContent='center' width='1000px' height='500' style={{position:"relative"}}>
          <Image 
          src='/hero-text.png'
          fill
          style={{objectFit:"contain"}}
          alt='side profile of the wandering jade mobile bar'
          />
          </Box>
      </Box>
      )}

        <Box px={['10',null ,'120']} py={['10',null ,'20']}>
          <Divider my='10'/>
        </Box>
        <Text pb={['5', null, '10']} align='center' fontSize='xl' w={[null, null,"50%"]} m={[null, null,'auto']}>The Wandering Jade is Utah’s Best Mobile Bar experience! Our vintage western style trailer bar offers a unique bar service experience for weddings, parties and events in the Utah County, Salt Lake County and surrounding areas. </Text>
        <Box px='120' py='19'>
          <Divider my='10'/>
        </Box>
        <Heading align='center'>Gallery</Heading>
      <Flex flexWrap="wrap" mt="10" p='9'>

          <Box width={['100%', '50%', '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g1-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box width={['100%', '50%', '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g2-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box width={['100%', '50%', '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g3-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box width={['100%', '50%', '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g4-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box width={['100%', '50%', '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g5-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box width={['100%', '50%', '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g6-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box width={['100%', '50%', '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g7-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box width={['100%', '50%', '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g8-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

      </Flex>
      </Box>
      </>
  )
}
