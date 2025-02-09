import Head from 'next/head'
import { Heading, Box, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'

import gallery from '../lib/gallery.json'


export default function Gallery() {
    
    const galleryArray = Object.entries(gallery);
    const getRandomNumber = () => Math.random() - 0.5;
    galleryArray.sort(getRandomNumber);

    return (
        <>
            <Head>
                <title>Wandering Jade | Gallery</title>
            </Head>
            <Box bgColor='gray.50'>
            <Box width={[null, null, '80%']} mx='auto' py='10'>

            <SimpleGrid columns={[1, null, 4]} spacingX={[5, null, 10]} spacingY={[10, 0, 0]}>
                {galleryArray.map(([id, [url, desc]]) => (
                    <Box layerStyle='galleryItem' key={id}>
                        <Image
                            src={`/gallery/${url}`}
                            fill
                            sizes='100%'
                            style={{objectFit:"contain"}}
                            alt={desc}
                        />
                    </Box>
                ))}
            </SimpleGrid>
            </Box>


            </Box>
        </>
    )
}