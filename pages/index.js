import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Box, Text, Divider, Heading, Flex, useMediaQuery, SimpleGrid } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    <>
    <Head>
      <title>Wandering Jade | Home</title>
    </Head>

    <Box bgColor='gray.50' px='5' pt='5'>
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

        <Box px={['10',null ,'120']} py={['10',null ,'20']}>
          <Divider my='10'/>
        </Box>
        <Text pb={['5', null, '10']} align='center' fontSize='xl' w={[null, null,"50%"]} m={[null, null,'auto']}>The Wandering Jade is Utah`s Best Mobile Bar experience! Our western boho style trailer bar offers a unique bar service experience for weddings, parties and events in the Utah County, Salt Lake County and surrounding areas.</Text>
        <Box px='120' py='19'>
          <Divider my='10'/>
        </Box>
        <Heading align='center'>Gallery</Heading>

        
      <SimpleGrid columns={[1, null, 4]} spacing={[10, null, 20]} mx={[null, null, '20']}>
          
          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g05.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g01.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g11.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g1-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g07.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/ribbonG4.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/halloween_g2.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g06.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/ribbonG12.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/halloween_g1.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/ribbonG7.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g04.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g02.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/hay_1.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/ribbonG5.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/halloween_g3.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g08.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g10.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/ribbonG3.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g2-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g09.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g4-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g03.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g5-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g6-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g7-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/halloween_g4.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/g8-v2.png'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/sal_g1.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>
          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/sal_g2.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image
              key='g1'
              src='/gallery/ribbonG11.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>

          <Box layerStyle='galleryItem'>
            <Image 
              src='/gallery/ribbonG10.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>


      </SimpleGrid>
      </Box>
      </>
  )
}
