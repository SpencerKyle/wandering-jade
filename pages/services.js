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
            <Box align='center'>                
                <Heading size='2xl' as='a' href='/services'>Services</Heading>
                <Text align='center' mt='5'>
                    Please note: All packages are dry service and do not include alcohol or mixers. These must be supplied by the customer.
                </Text>
            
                <Text align='center' mt='5'>
                    All packages include two certified bartenders, a custom printed menu, ice, drinkware, water station, bar equipment, and bar set up/clean up! Delivery Fee after 50 Miles round trip (4 Hour Minimum Required)
                </Text>
            </Box>
            
            <Service />
        
            <br/>
            <br/>

            <SimpleGrid columns={[1, 1, 2, 3, 3]} pb='5' spacing={10} alignItems='start' justifyItems="center">
                <Box order={[1, 2]} alignItems='center' display='flex' flexDir='column'>
                    <Box _hover={{ bgColor: '#E6A3A4' }} as='a' href='/form' px={6} py={5} borderRadius={15}  bg="#E6BDBE"><Text as='b' fontSize='xl' color='white'>Fill out a quote form!</Text></Box>
                    <Text mb={10} mt={5}>Or</Text>
                    <Box mb={20}><Text as='a' href="mailto:wanderingjadebar@gmail.com" bg='#E6BDBE' _hover={{ bgColor: '#E6A3A4' }} borderRadius={15} p={5} fontSize='xl' color='white' fontWeight={700}>wanderingjadebar@gmail.com</Text></Box>
                    <Card layerStyle='serviceCard' bgColor="#FFE1E1" >
                        <CardHeader><Heading>ADD-ONS</Heading></CardHeader>
                        <CardBody>
                            <AddonsList />
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Card>
                </Box>

                <Box layerStyle='serviceCard' borderRadius="lg" overflow="hidden" height={530} order={[2, 1]}>
                    <Carousel hasMediaButton={false} hasSizeButton={false} hasIndexBoard={false} hasThumbnails={false} isAutoPlaying={true} images={addonImgs} leftIcon={<ChevronLeftIcon w={10} h={10} color='gray.300'/>} rightIcon={<ChevronRightIcon w={10} h={10} color='gray.300'/>}/>
                </Box>

                <Box borderRadius="lg" order={[3, 3]} position='relative' alignItems='center' width="100%">
                    <Image 
                        src='/step1_gypsy_2.webp'
                        width={700}
                        height={850}
                        alt='gypsy'
                    />
                    <Box layerStyle='customBox' style={{left: "50px"}}>
                        Tipsy Pop-up Bar
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>
        </Box>
        </>
    )
}