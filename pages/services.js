import { Card, CardHeader, CardBody, CardFooter, Span, UnorderedList, Box, ListItem, Text, SimpleGrid, Flex, Heading, Spacer, ChakraProvider, AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import Head from 'next/head';

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

        
        <Box bgColor='gray.50' p={5} textStyle='serviceItem'>
            
            <Text align='center' fontWeight={'light'}>
                <Text as={'span'} fontWeight={'bold'}>Please note:</Text> All packages are dry service and do <Text as={'span'} fontWeight={'bold'}>not</Text> include alcohol <Text as={'span'} fontWeight={'bold'}>or</Text> mixers. These must be supplied by the customer.
            </Text>

            <Text align='center' fontWeight={'light'} mt='5'>
                All packages include a custom printed menu, ice, drinkware, water station, bar equipment, and bar set up! (4 Hour Minimum Required)
            </Text>

        <Box width={['100%', "100%", null, null, "90%"]}  mx='auto'>
            <SimpleGrid columns={[1, 2, 3, 3, 3]} spacing={10} pb={10} pt={20} justifyItems="center" order={[1, 1]} alignItems='start'>
            <Card  layerStyle='serviceCard' bgColor='#E3DDD5'>    
                <CardHeader><Heading>Take It Easy</Heading></CardHeader>
                <CardBody>
                    <UnorderedList>
                        <ListItem>2 Certified Bartenders</ListItem>
                        <ListItem>Beer, Wine, & Bubbles Service</ListItem>
                    </UnorderedList>
                </CardBody>
                <CardFooter></CardFooter>
                    <Box layerStyle='customBox' as='a' href='/form'>
                            Click here for your own custom quote!
                    </Box>
            </Card>

            <Card layerStyle='serviceCard' bgColor='#C1C9AF' order={[2, 3]}>
                <CardHeader><Heading>Perfect Match</Heading></CardHeader>
                <CardBody>
                    <Box>
                        <UnorderedList>
                            <ListItem>2 Certified Bartenders</ListItem>
                            <ListItem>3 Spirits Options</ListItem>
                            <ListItem>2 Beers Options</ListItem>
                            <ListItem>2 Seltzer Options</ListItem>
                            <ListItem>3 Mixers Options</ListItem>
                            <ListItem>Any Garnishes Needed</ListItem>
                        </UnorderedList>
                    </Box>
                </CardBody>
                <CardFooter></CardFooter>
                <Box layerStyle='customBox' as='a' href='/form'>
                        Click here for your own custom quote!
                </Box>
            </Card>

            <Card layerStyle='serviceCard' bgColor='#E6EDf5' order={[3, 2]}>
                <CardHeader><Heading>Going All Out</Heading></CardHeader>
                <CardBody>
                    <Box>
                        <UnorderedList>
                            <ListItem>2 Certified Bartenders</ListItem>
                            <ListItem>Full Soda Bar</ListItem>
                            <ListItem>4 Spirits Options</ListItem>
                            <ListItem>3 Beers Options</ListItem>
                            <ListItem>3 Seltzer Options</ListItem>
                            <ListItem>5 Mixers Options</ListItem>
                            <ListItem>Any Premium Garnishes</ListItem>
                            <ListItem>Menu Consultation</ListItem>
                            <ListItem>Shopping List Guide</ListItem>
                            <ListItem>Custom Simple Syrups</ListItem>
                            <ListItem>Bitters</ListItem>
                        </UnorderedList>
                    </Box>
                    <Spacer />
                </CardBody>
                <CardFooter></CardFooter>
                <Box layerStyle='customBox' as='a' href='/form'>
                        Click here for your own custom quote!
                </Box>
            </Card>

            </SimpleGrid>

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