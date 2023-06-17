import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Text, Divider, Heading, Flex, useMediaQuery, extendTheme, Skeleton } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    <Box bgColor='gray.50' px='5' pt='10'>
      { isMobile && (
          <Image
            src='/hero-mobile.png'
            height='2000'
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
          <Box align='center' display='flex' justifyContent='center' width='1000px' height='500' style={{position:"relative"}}>
          <Image 
          src='/hero-text.png'
          fill
          style={{objectFit:"contain"}}
          />
          </Box>
      </Box>
      )}

        <Box px={['10',null ,'120']} py={['10',null ,'20']}>
          <Divider my='10'/>
        </Box>
        <Text pb={['5', null, '10']} align='center' fontSize='xl'>The Wandering Jade is Utah’s Best Mobile Bar experience! Our vintage western style trailer bar offers a unique bar service experience for weddings, parties and events in the Utah County, Salt Lake County and surrounding areas. </Text>
        <Box px='120' py='19'>
          <Divider my='10'/>
        </Box>
        <Heading align='center'>Gallery</Heading>
      <Flex flexWrap="wrap" mt="10" p='9'>

        
          <Box width={['100%', null, '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Skeleton isLoaded>
            <Image 
              src='/g1-v2.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
              </Skeleton>
          </Box>

          <Box width={['100%', null, '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g2-v2.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width={['100%', null, '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g3-v2.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width={['100%', null, '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g4-v2.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width={['100%', null, '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g5-v2.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width={['100%', null, '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g6-v2.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width={['100%', null, '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g7-v2.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

          <Box width={['100%', null, '25%']} height='300px' mb='5' style={{position:"relative"}}>
            <Image 
              src='/g8-v2.png'
              fill
              style={{objectFit:"contain"}}
              alt='picture of wandering jade'
              />
          </Box>

      </Flex>
      </Box>
  )
}
