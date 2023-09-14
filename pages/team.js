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
                <Text pb='10'>all bartenders are tips certified you can request a specific bartender and we will try to accommodate </Text>

                <Box>
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/bartender1.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Amberdee in the Wandering Jade'
                        />
                    </Box>
                        <Heading layerStyle='teamName'>Amberdee</Heading>
                </Box>

                <Box>
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/bartender002.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Katelynn in the Wandering Jade'
                        />
                    </Box>
                        <Heading layerStyle='teamName'>Katelynn</Heading>
                </Box>

                <Box>
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/bartender03.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Harley in the Wandering Jade'
                        />
                    </Box>
                        <Heading layerStyle='teamName'>Harley</Heading>
                </Box>
    
            </Box>
        </>
    )
}