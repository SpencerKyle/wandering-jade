import { Card, CardHeader, CardBody, CardFooter, UnorderedList, Box, ListItem, Text, SimpleGrid, Flex, Heading, Spacer, ChakraProvider, AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import Head from 'next/head';

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
        <Box bgColor='gray.50' position='relative' p={10} textStyle='serviceItem'>
            <SimpleGrid columns={[1, 1, 3]} spacing={10} mx={10} pb={10} pt={20}>
                

            <Card bgColor='#C1C9AF' align='center' height={[null, null, '80%']} my='5'>
                <CardHeader><Heading>Perfect Match</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <Box alignContent='center'>
                        <UnorderedList maxW={300} listStylePos='outside' textAlign='left' style={{ display: 'inline-block' }}>
                            <ListItem>Serving Beer, Wine, and Bubbles Service</ListItem>
                            <ListItem>Horse Trailer</ListItem>
                            <ListItem>Bartender</ListItem>
                            <ListItem>Bar Back</ListItem>
                        </UnorderedList>
                    </Box>
                    </CardBody>
                    <CardFooter></CardFooter>
                    <Box layerStyle='customBox'>
                        Starts at $800, Contact us for a custom quote!
                    </Box>
            </Card>

            <Card bgColor='#E6EDf5' align='center'>
                <CardHeader><Heading>Going All Out</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <Box>
                        <UnorderedList maxW={250} listStylePos='outside' textAlign='left' style={{ display: 'inline-block' }}>
                            <ListItem>Two Signature Cocktails</ListItem>
                            <ListItem>Beer and Wine Service</ListItem>
                            <ListItem>Pricing varies based on cocktails and addons</ListItem>
                        </UnorderedList>
                    </Box>
                    <Spacer />
                    <Box>
                        <Text fontSize='md' mt='10' fontWeight='bold' maxW='250'>All Alcohol & Mixers must be provided by customer</Text>
                    </Box>
                </CardBody>
                <CardFooter></CardFooter>
                <Box layerStyle='customBox'>
                        Contact us for your own custom quote!
                </Box>
            </Card>

            <Card bgColor='#E3DDD5' align='center' height={[null, null, '80%']} mt='5'>    
                <CardHeader><Heading>TAKE IT EASY</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <UnorderedList maxW={250} listStylePos='outside' textAlign='left' style={{ display: 'inline-block' }}>
                        <ListItem mb='5'>The Wandering Jade can also be used for non-alcoholic events</ListItem>
                        <ListItem mb='5'>We also offer desserts and mocktail service</ListItem>
                    </UnorderedList>
                </CardBody>
                <CardFooter></CardFooter>
                <Box layerStyle='customBox'>
                        Starts at $800, Contact us for a custom quote!
                </Box>
            </Card>
            </SimpleGrid>

            <br/>
            <br/>

            <SimpleGrid columns={[1, 1, 3]} pb='5' gap={10}>
                <Box height='75vh'>
                    <Carousel hasMediaButton={false} hasSizeButton={false} hasIndexBoard={false} hasThumbnails={false} isAutoPlaying={true} images={addonImgs} leftIcon={<ChevronLeftIcon w={10} h={10} color='gray.300'/>} rightIcon={<ChevronRightIcon w={10} h={10} color='gray.300'/>}/>
                </Box>

                <Card align='center' bgColor="#FFE1E1" height={[null, null, '70%']}>
                    <CardHeader><Heading>ADD-ONS</Heading></CardHeader>

                    <CardBody>
                        <UnorderedList listStylePos='outside'>
                            <ListItem>Bartender Service</ListItem>
                            <ListItem>Additional Pop-up Bar</ListItem>
                            <ListItem>Corn Hole</ListItem>
                            <ListItem>Barrels and Bar-height Tables</ListItem>
                            <ListItem>Custom Drink Menu (Printed copy at event)</ListItem>
                            <ListItem>Bar Consultation and Drink Tasting (Prior to Event)</ListItem>
                            <ListItem>Koozies</ListItem>
                            <ListItem>Custom Koozies</ListItem>
                            <ListItem>Custom Drinkware</ListItem>
                        </UnorderedList>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
                <Box>
                    <Image 
                        src='/custom-drinks-menu.png'
                        width={400}
                        height={600}
                    />
                </Box>
            </SimpleGrid>
        </Box>
        </>
    )
}