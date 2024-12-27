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
            <Box mx={[null, null, '20%']}>

            <SimpleGrid columns={[1, null, 4]} spacing={[10, null, 10]} p={[null, null, '10']}>
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