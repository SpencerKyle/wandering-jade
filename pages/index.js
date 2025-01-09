import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Box, Text, Divider, Heading, useMediaQuery, SimpleGrid } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    <>
    <Head>
      <title>Wandering Jade | Home</title>
    </Head>

    <Box bgColor='gray.50' pt='5' align='center'>

      { isMobile && (
          <Image
            src='/hero_mobile.webp'
            height='100'
            width='1000'
            alt='Picture of the Wandering Jade Mobile Bar in front of a rustic wall.'
          />
      )}

      {!isMobile && (
        <Box
          bgImage="url('/hero_bg.webp')"
          bgPosition="center top"
          bgSize='cover'
          bgAttachment='fixed'
          bgRepeat='no-repeat'
          h={['45vh', '50vh', '75vh']}
          align='center'

          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
        <Box width={[null, null, '50%']} height={['60%', null, '50%']} style={{position:"relative"}}>
          <Image 
          src='/wanderingjadetext.png'
          fill
          alt='Wandering Jade Text'
          />
        </Box>
      </Box>
      )}
      <Box width={[null, '10vw', '70%']} pb='5'>
          <Box px={['10',null ,'120']} py={['10',null ,'20']}>
              <Divider my='10'/>
            </Box>
            <Text pb={['5', null, '10']} fontSize='2xl' mx='10%'>The Wandering Jade is Utah`s Best Mobile Bar experience! Our western boho style trailer bar offers a unique bar service experience for weddings, parties and events in the Utah County, Salt Lake County and surrounding areas.</Text>
            <Box px='120' py='19'>
              <Divider my='10'/>
          </Box>

          <SimpleGrid columns={['1', null, '2']} mb={10}>
            <Box alignContent='center' order={[2, null, 1]}>
                <Heading fontSize='3xl' m='5'>How it works:</Heading>
                <Text fontSize='xl' m='5'>The party comes to you! We are insured and have certified bartenders ready to serve you and your guests cocktails or mocktails at your next event. We provide everything but the liquid.</Text>
                <Box _hover={{ bgColor: '#E6A3A4' }} as='a' href='/form' px={10} py={5} borderRadius={15}  bg="#E6BDBE"><Text as='b' fontSize='xl' color='white'>Book now!</Text></Box>
            </Box>
            <Box height='400px' position='relative' order={[1, null, 2]}>
              <Image 
                  src='/our.webp'
                  fill
                  sizes='100%'
                  style={{objectFit:"contain"}}
                  alt='Gallery picture for the Wandering Jade'
                  />
            </Box>
          </SimpleGrid>

        </Box>
      </Box>
      </>
  )
}
