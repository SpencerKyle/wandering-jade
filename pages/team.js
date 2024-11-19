import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'


export default function Team() {
    return (
        <>
            <Head>
                <title>Wandering Jade | Team</title>
            </Head>
            <Box p='10' bgColor='gray.50' align='center' width="100%" display='flex' flexDirection='column'>
                <Heading mb='10'>Meet the Team!</Heading>
                <Box>
                    <Heading layerStyle='teamName'>Amberdee</Heading>
                    <Text mb='3'>Owner/Bartender</Text>
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/bartender1.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Amberdee in the Wandering Jade'
                        />
                    </Box>
                </Box>

                <Box>
                <Heading layerStyle='teamName'>Jake</Heading>
                <Text mb='3'>Bartender</Text>                    
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/jakebartender.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Jake in the Wandering Jade'
                        />
                    </Box>
                </Box>

                <Box>
                <Heading layerStyle='teamName'>Katelynn</Heading>
                <Text mb='3'>Bartender</Text>
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/katelynnbartender-1.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Katelynn in the a field'
                        />
                    </Box>
                </Box>
    
            </Box>
        </>
    )
}