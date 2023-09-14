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
                <Heading>Meet the team!</Heading>
                <Text pb='10' mb='10' >All bartenders are TIPS certified, a specific bartender can be requested <br/> and we will try to accommodate based on their availability.</Text>

                <Box>
                    <Heading layerStyle='teamName'>Amberdee</Heading>
                    <Text mb='3'>Owner</Text>
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
                    <Heading mb='3'>Katelynn</Heading>
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/bartender002.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Katelynn in the Wandering Jade'
                        />
                    </Box>
                </Box>

                <Box>
                    <Heading mb='3'>Harley</Heading>
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/bartender03.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Harley in the Wandering Jade'
                        />
                    </Box>
                </Box>
    
            </Box>
        </>
    )
}