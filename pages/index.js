import Image from 'next/image'
import Head from 'next/head'

import { Inter } from 'next/font/google'
import { Box, Text, Divider, Heading, useMediaQuery, SimpleGrid, Flex } from '@chakra-ui/react'
import Services from '@/components/Services'
import Team from '@/components/Team'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    <>
    <Head>
      <title>Wandering Jade | Home</title>
    </Head>

    <Box bgColor='gray.50' pt='5' mx='auto' px='5'>

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
      <Box pb='5' mx='auto' align='center'>
          <Divider my='10'/>

          <Text pb={['5', null, '10']} fontSize='2xl'>The party comes to you! We are insured and have certified bartenders ready to serve you and your guests cocktails or mocktails at your next event. We provide everything but the liquid.</Text>

          <Divider my='10'/>

          <Box>
              <Heading fontSize='3xl' m='5'>How it works:</Heading>
              <Box mb='100px'>
                <Text fontSize='2xl' mb='10px'>Step 1 - Choose from our selection of bars:</Text>
                <Flex justify='center'>
                  <Box border='solid' width='400px' height='400px'>
                    <Text>Wandering Jade Horse Trailer</Text>
                  </Box>
                  <Box border='solid' width='400px' height='400px'>
                    <Text>Gypsy Pop-up Bar</Text>
                  </Box>
                </Flex>
              </Box>

              <Box mb='100px'>
                <Text fontSize='2xl' mb='10px'>Step 2 - Choose one of our three services below:</Text>
                <Services/>
              </Box>

              <Box>
                <Text fontSize='2xl' mb='10px'>Step 3 -</Text>
                <Flex justify='center' align='center'>
                  <Box _hover={{ bgColor: '#E6A3A4' }} as='a' href='/form' bg="#E6BDBE" px={6} py={5} borderRadius={15}><Text as='b' fontSize='xl' color='white'>Fill out a quote form!</Text></Box>
                  <Text p={7}>Or</Text>
                  <Box _hover={{ bgColor: '#E6A3A4' }} as='a' href="sms:8013587167" bg='#E6BDBE' px={6} py={5} borderRadius={15}><Text as='b' fontSize='xl' color='white'>Text us @ 801-358-7167</Text></Box>
                </Flex>
              </Box>
            </Box>
          </Box>
          
          <Box px='25px'>
            <Team />
          </Box>
    </Box>
    </>
  )
}
