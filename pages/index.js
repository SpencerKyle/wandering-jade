import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Box, Text, Divider, Heading, Flex, useMediaQuery, List, ListItem } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    <>
    <Head>
      <title>Wandering Jade | Home</title>
    </Head>

    <Box bgColor='gray.50' px='5' pt='5' align='center'>
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

        <Box display='flex' flexDir={['column-reverse', 'column', 'row']} width='100%' justifyContent='center' py={10}>
          <Box display='flex' justifyContent='center' flexDirection='column'>
            <Heading align='center' size='lg' mb={3}>Meet the Wandering Jade Bar!</Heading>
            <List textAlign='left' spacing={3} p={4} fontSize={20}>
              <ListItem>Completely renovated Horse trailer</ListItem>
              <ListItem>Front and back bar</ListItem>
              <ListItem>3 coolers for ice & beer & wine</ListItem>
              <ListItem>Fully contained</ListItem>
              <ListItem>BoHo Western Style</ListItem>
            </List>
          </Box>
          <Box width={['100%', null, '50%']} height='400px' position='relative'>
            <Image 
              src='/our.webp'
              fill
              sizes='100%'
              style={{objectFit:"contain"}}
              alt='Gallery picture for the Wandering Jade'
              />
          </Box>
        </Box>

      </Box>
      </>
  )
}
