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
        <Box bgColor='gray.50' position='relative' p={10}>
            <SimpleGrid columns={[1, 1, 3]} spacing={10} mx={10} pb={10} pt={20}>
                

            <Card bgColor='#C1C9AF' align='center' height={[null, null, '80%']} my='5'>
                <CardHeader><Heading>PERFECT MATCH</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <Box>
                        <UnorderedList maxW={300} listStylePos='inside' textAlign='left' style={{ display: 'inline-block' }} textStyle='serviceItem'>
                            <ListItem>SERVING BEER, WINE, AND BUBBLES SERVICE</ListItem>
                            <ListItem>HORSE TRAILER</ListItem>
                            <ListItem>BARTENDER</ListItem>
                            <ListItem>BAR BACK</ListItem>
                        </UnorderedList>
                    </Box>
                    </CardBody>
                <CardFooter>
                </CardFooter>
                    <Box layerStyle='customBox'>
                        Starts at $800, Contact us for a custom quote!
                    </Box>
            </Card>

            <Card bgColor='#E6EDf5' align='center'>
                <CardHeader><Heading>GOING ALL OUT</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <Box>
                        <UnorderedList maxW={250} listStylePos='inside' textAlign='left' style={{ display: 'inline-block' }}>
                            <ListItem>TWO SIGNATURE COCKTAILS</ListItem>
                            <ListItem>BEER AND WINE SERVICE</ListItem>
                            <ListItem>PRICING VARIES BASED ON COCKTAILS AND ADDONS</ListItem>
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

            <Card bgColor='#E3DDD5' align='center' height={[null, null, '75%']} mt='5'>    
                <CardHeader><Heading>TAKE IT EASY</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <Box>
                        <Text mb='5'>THE WANDERING JADE CAN ALWAYS BE USED FOR NON-ALCOHOLIC EVENTS</Text>
                        <Text mb='5'>THE TRAILER IS A FUN TOUCH WHEN SERVING DESSERT OR MOCKTAILS!</Text>
                    </Box>
                </CardBody>
                <CardFooter></CardFooter>
                <Box layerStyle='customBox'>
                        Starts at $800, Contact us for a custom quote!
                </Box>
            </Card>
            </SimpleGrid>

            <br/>

            <SimpleGrid columns={[1, 1, 3]} pb='5' gap={10}>
                <Box height='75vh'>
                    <Carousel hasMediaButton={false} hasSizeButton={false} hasIndexBoard={false} hasThumbnails={false} isAutoPlaying={true} images={addonImgs} leftIcon={<ChevronLeftIcon w={10} h={10} color='gray.300'/>} rightIcon={<ChevronRightIcon w={10} h={10} color='gray.300'/>}/>
                </Box>

                <Card align='center'>
                    <CardHeader><Heading>Addons</Heading></CardHeader>
                    <CardBody>
                        <UnorderedList listStylePos='inside'>
                            <ListItem>Bartender Service</ListItem>
                            <ListItem>Additional Pop-up Bar</ListItem>
                            <ListItem>Corn Hole</ListItem>
                            <ListItem>Barrels and Bar-Height Tables</ListItem>
                            <ListItem>Custom Drink Menu (Printed copy at event)</ListItem>
                            <ListItem>Bar Consultation/Drink Tasting (prior to event)</ListItem>
                            <ListItem>Koozies (price may vary based on quantity)</ListItem>
                            <ListItem>Custom Koozies (name and/or date) Must be 30+ calendar days notice, price may vary based on quantity</ListItem>
                            <ListItem>Custom Drinkware (name and/or date) Must be 30+ calendar days notice, price may vary based on quantity</ListItem>
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