import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Text, Divider, Heading, SimpleGrid, useMediaQuery } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    
    <Box bgColor='gray.50' p='10'>
      { isMobile && (
          <Image
            src='/landingBgNEW.png'
            height='1000'
            width='1000'
            alt='landing picture of the wandering jade mobile bar'
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
        alt='landing picture of wandering jade'
        >
          <Box align='center' display='flex' justifyContent='center'>
          <Image 
          src='/hero-text.png'
          height='345'
          width='900'
          p='0'
          m='0'
          />
          </Box>
      </Box>
      )}

        <Box px='120' py='20'>
          <Divider/>
        </Box>
        <Text pb='10' align='center' fontSize='xl'>The Wandering Jade is Utah’s Best Mobile Bar experience! Our vintage western style trailer bar offers a unique bar service experience for weddings, parties and events in the Utah County, Salt Lake County and surrounding areas. </Text>
        <Box px='120' py='19'>
          <Divider/>
        </Box>
        <Heading align='center'>Gallery</Heading>
      <SimpleGrid columns={[1, null, 4]} spacing='12px' mt='10' pl='5'>
          <Box width='300px' height='300px' style={{position:"relative"}}>
            <Image 
              src='/2.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width='300px' height='300px' style={{position:"relative"}}>
            <Image 
              src='/1.JPG'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width='300px' height='300px' style={{position:"relative"}}>
            <Image 
              src='/3.JPG'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width='300px' height='300px' style={{position:"relative"}}>
            <Image 
              src='/DSC_0036.jpg'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width='300px' height='300px' style={{position:"relative"}}>
            <Image 
              src='/8new.JPG'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width='300px' height='300px' style={{position:"relative"}}>
            <Image 
              src='/6.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width='300px' height='300px' style={{position:"relative"}}>
            <Image 
              src='/5.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width='300px' height='300px' style={{position:"relative"}}>
            <Image 
              src='/7.JPG'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

      </SimpleGrid>
    </Box>
  )
}
