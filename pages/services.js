import { Card, CardHeader, CardBody, CardFooter, Span, UnorderedList, Box, ListItem, Text, SimpleGrid, Flex, Heading, Spacer, ChakraProvider, AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import Service from '@/components/Services.js';

import AddonsList from '../config/addonsList.js';
import slides from '../lib/slideshow.json'

export default function Services() {

    //slideshow functionality
    const addonImgs = Object.entries(slides).map(([id, [src, desc]]) => ({
        src: `/slideshow/${src}`,
        key: {id},
        alt: {desc}
    }));

    return (
        <>
        <Head>
            <title>Wandering Jade | Services</title>
        </Head>

        
        <Box bgColor='gray.50' p={5}>

        <Box width={['100%', "100%", null, null, "90%"]}  mx='auto'>
            <Service />
        
            <br/>
            <br/>

            <SimpleGrid columns={[1, 1, 2, 3, 3]} pb='5' spacing={10} alignItems='start' justifyItems="center">

                <Card layerStyle='serviceCard' bgColor="#FFE1E1" order={[1, 2]}>
                    <CardHeader><Heading>ADD-ONS</Heading></CardHeader>
                    <CardBody>
                        <AddonsList />
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>

                <Box layerStyle='serviceCard' borderRadius="lg" overflow="hidden" height={530} order={[2, 1]}>
                    <Carousel hasMediaButton={false} hasSizeButton={false} hasIndexBoard={false} hasThumbnails={false} isAutoPlaying={true} images={addonImgs} leftIcon={<ChevronLeftIcon w={10} h={10} color='gray.300'/>} rightIcon={<ChevronRightIcon w={10} h={10} color='gray.300'/>}/>
                </Box>

                <Box layerStyle='serviceCard' borderRadius="lg" overflow="hidden" order={[3, 3]}>
                    <Image 
                        src='/gypsypopupbar.webp'
                        width={700}
                        height={850}
                        alt='gypsy'
                    />
                </Box>
            </SimpleGrid>
        </Box>
        </Box>
        </>
    )
}