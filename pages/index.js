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
                <Text fontSize='2xl' mb='20px'>Step 1 - Choose from our selection of bars:</Text>
                <Flex justify='center' gap={20} wrap='wrap'>
                  <Box position='relative' width='450px' height='auto' mb={10}>
                    <Image
                      width={500}
                      height={850}
                      src='/step1_jade.webp'
                      alt='ur mom'
                      style={{ borderRadius: '15px' }}
                    />
                    <Box layerStyle='customBox' style={{left: "50%", transform: "translateX(-50%)", bottom: '-30px'}}>
                        Wandering Jade
                    </Box>
                  </Box>
                  <Box position='relative' width='450px' height='auto' mb={10}>
                    <Image
                      width={500}
                      height={850}
                      src='/step1_gypsy_2.webp'
                      alt='picture of the Gypsy Pop-up Bar'
                      style={{ borderRadius: '15px' }}
                    />
                    <Box layerStyle='customBox' style={{left: "50%", transform: "translateX(-50%)", bottom: '-30px'}}>
                        Tipsy Pop-up Bar
                    </Box>
                  </Box>
                </Flex>
              </Box>

              <Box mb='100px'>
                <Text fontSize='2xl' mb='10px'>Step 2 - Choose one of our three services below:</Text>
                <Services/>
              </Box>

              <Box mb={20} textAlign='center'>
                <Text fontSize='2xl' mb='10px'>Step 3 -</Text>
                <Box display='grid' gridTemplateColumns={['1fr', null, '1fr auto 1fr']} alignItems='center' gap={1} justifyItems='center' mt={10}>
                  <Box _hover={{ bgColor: '#E6A3A4' }} as='a' href='/form' bg="#E6BDBE" px={6} py={5} borderRadius={15} textAlign="center" w={['90%', 'fit-content']}>
                    <Text fontWeight="bold" fontSize='xl' color='white'>Click here to fill out a quote form!</Text>
                  </Box>

                  <Text fontSize='xl' fontWeight='bold' textAlign='center' lineHeight='1' my='20px'>
                    or
                  </Text>

                  <Box _hover={{ bgColor: '#E6A3A4' }} as='a' href='mailto:wanderingjadebar@gmail.com' bg="#E6BDBE" px={6} py={5} borderRadius={15} textAlign="center" w={['90%', 'fit-content']}>
                    <Text fontWeight="bold" fontSize='xl' color='white'>Email us! wanderingjadebar@gmail.com</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          
          <Box px='25px'>
            <Box align='center' my='10'>
            <Heading size='2xl' as='a' href='/team'>Meet the Team!</Heading>
          </Box>

          <SimpleGrid columns={[1, 2, 3, 3, 3]} justifyItems="center" alignItems='start' align='center' mx='auto'>
            <Box width='300px'>
                <Text layerStyle='teamName'>Amberdee</Text>
                <Text mb='3'>Owner/Bartender</Text>
                <Box layerStyle='teamItem'>
                    <Image
                      src='/team/amberbartender_2.webp'
                      fill
                      sizes='100%'
                      style={{objectFit:"contain"}}
                      alt='Picture of Amberdee in the Wandering Jade'
                    />
                </Box>
            </Box>

            <Box width={['350px','400px']} paddingTop='70px'>
                <Box layerStyle='teamItem' style={{position: 'relative'}}>
                  <Image
                    src='/team/team3.webp'
                    fill
                    sizes='100%'
                    style={{objectFit:"contain"}}
                    alt='Amber and Katelynn pouring drinks behind the bar.'
                    />
                  <Text position="absolute" bottom="3" left="50%" transform="translateX(-50%)" fontSize='xl' fontWeight='bold'>The Dream Team!</Text>
                  </Box>
              </Box>

            <Box width='300px'>
              <Text layerStyle='teamName'>Katelynn</Text>
              <Text mb='3'>Bartender</Text>
              <Box layerStyle='teamItem'>
                  <Image
                    src='/team/katelynnbartender_2.webp'
                    fill
                    sizes='100%'
                    style={{objectFit:"contain"}}
                    alt='Picture of Katelynn in a field'
                  />
              </Box>
            </Box>
            </SimpleGrid>
          </Box>
    </Box>
    </>
  )
}
