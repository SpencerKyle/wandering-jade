import { Card, CardHeader, CardBody, CardFooter, Span, UnorderedList, Box, ListItem, Text, SimpleGrid, Flex, Heading, Spacer, ChakraProvider, AspectRatio } from '@chakra-ui/react'
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
            
            <Text align='center' fontWeight={'light'}>
                <Text as={'span'} fontWeight={'bold'}>Please note:</Text> All packages are dry service and do <Text as={'span'} fontWeight={'bold'}>not</Text> include alcohol <Text as={'span'} fontWeight={'bold'}>or</Text> mixers. These must be supplied by the customer.
            </Text>

            <Text align='center' fontWeight={'light'} mt='5'>
                All packages include a custom printed menu, ice, drinkware, water station, bar equipment, and bar set up! (4 Hour Minimum Required)
            </Text>

        <Box width={['100%', null, "60%"]}  margin='auto'>
            <SimpleGrid  columns={[1, 1, 3]} spacing={10} pb={10} pt={20} justifyItems="center" order={[1, 1]}>
            <Card pb={10} bgColor='#E3DDD5' align='center' height={[null, null, '60%']} width={['100%', null, '70%']} mt='5'>    
                <CardHeader><Heading>Take It Easy</Heading></CardHeader>
                <CardBody>
                    <UnorderedList maxW={250} listStylePos='outside' textAlign='left'>
                        <ListItem>2 Certified Bartenders</ListItem>
                        <ListItem>Beer, Wine, & Bubbles Service</ListItem>
                    </UnorderedList>
                </CardBody>
                <CardFooter></CardFooter>
                <Box layerStyle='customBox'>
                        Contact us for your own custom quote!
                </Box>
            </Card>

            <Card bgColor='#C1C9AF' align='center' height={[null, null, '70%']} width={['100%', null, '70%']} my='5' order={[2, 3]}>
                <CardHeader><Heading>Perfect Match</Heading></CardHeader>
                <CardBody>
                    <Box>
                        <UnorderedList maxW={300} listStylePos='outside' textAlign='left' style={{ display: 'inline-block' }}>
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
                <Box layerStyle='customBox'>
                        Contact us for your own custom quote!
                </Box>
            </Card>

            <Card bgColor='#E6EDf5' align='center' width={['100%', null, '70%']} order={[3, 2]}>
                <CardHeader><Heading>Going All Out</Heading></CardHeader>
                <CardBody>
                    <Box>
                        <UnorderedList maxW={200} listStylePos='outside' textAlign='left' style={{ display: 'inline-block' }}>
                            <ListItem>2 Certified Bartenders</ListItem>
                            <ListItem>Full Soda Bar OR 2 Signature Cocktails</ListItem>
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
                <Box layerStyle='customBox'>
                        Contact us for your own custom quote!
                </Box>
            </Card>

            </SimpleGrid>

            <br/>
            <br/>

            <SimpleGrid columns={[1, 1, 3]} pb='5' gap={10}>

                <Card align='center' bgColor="#FFE1E1" height={[null, null, '70%']} order={[1, 2]} my='auto'>
                    
                    <CardHeader><Heading>ADD-ONS</Heading></CardHeader>
                    <CardBody>
                        <UnorderedList listStylePos='outside'>
                            <ListItem>Additional Spirit - $50 each</ListItem>
                            <ListItem>Additional Mixer - $25 each</ListItem>
                            <ListItem>Gypsy Pop Up Bar - $100/hr with a minimum of 4 hrs. Can be an addition to the horse trailer or rented by itself, will include extra bartender if rented together.</ListItem>
                            <ListItem>Cornhole and Bags - $50</ListItem>
                            <ListItem>5 bar height tables and decorative barrels- $50</ListItem>
                            <ListItem>Koozies or Custom Koozies - Pricing Based on quantity and design</ListItem>
                            <ListItem>Custom drinkware- Based on quantity and design</ListItem>
                        </UnorderedList>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>

                <Box borderRadius="lg" overflow="hidden" height='55vh' order={[2, 1]}>
                    <Carousel hasMediaButton={false} hasSizeButton={false} hasIndexBoard={false} hasThumbnails={false} isAutoPlaying={true} images={addonImgs} leftIcon={<ChevronLeftIcon w={10} h={10} color='gray.300'/>} rightIcon={<ChevronRightIcon w={10} h={10} color='gray.300'/>}/>
                </Box>

                <Box borderRadius="lg" overflow="hidden" order={[3, 3]} my='auto'>
                    <Image 
                        src='/gypsypopupbar.webp'
                        width={700}
                        height={1050}
                    />
                </Box>
            </SimpleGrid>
        </Box>
        </Box>
        </>
    )
}