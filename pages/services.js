import { Card, CardHeader, CardBody, CardFooter, UnorderedList, Box, ListItem, Text, SimpleGrid, Flex, Heading, Spacer, ChakraProvider, AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import Head from 'next/head';

export default function Services() {
    const addonImgs = [`slide-1.JPG`, 'slide-2.JPG', 'slide-3.JPG', 'slide-4.JPG', 'slide-5.JPG', 'slide-6.JPG', 'slide-7.JPG', 'slide-8.JPG', 'slide-9.png'].map((number) => ({
        src: `/${number}`,
        alt: "picture"
    }));

    return (
        <>
        <Head>
            <title>Wandering Jade | Services</title>
        </Head>
        <Box bgColor='gray.50' position='relative'>
            <SimpleGrid columns={[1, 1, 3]} spacing={10} mx={10} pb={10} pt={20}>
                

            <Card bgColor='#C1C9AF' align='center' height={[null, null, '80%']}>
                <CardHeader><Heading>PERFECT MATCH</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <Box>
                    {/* <Image
                        src="/perfect_match_2.webp"
                        width={300}
                        height={300}
                    /> */}
                    <Text fontSize='xl' mb="6" mt="2" fontWeight='bold'>What&apos;s included?</Text>
                    <UnorderedList maxW={300} listStylePos='inside' textAlign='left' style={{ display: 'inline-block' }}>
                        <ListItem>SERVING BEER, WINE, AND BUBBLES SERVICE</ListItem>
                        <ListItem>HORSE TRAILER</ListItem>
                        <ListItem>BARTENDER</ListItem>
                        <ListItem>BAR BACK</ListItem>
                    </UnorderedList>
                    </Box>
                    <Spacer />
                    <Box>
                        <Text fontSize='md' mt='10' fontWeight='bold' maxW='250'>All Alcohol & Mixers must be provided by customer</Text> 
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
                        {/* <Image
                            src="/going_all_out_2.webp"
                            width={300}
                            height={300}
                        /> */}
                        <Text fontSize='xl' mb="6" mt="2" fontWeight='bold'>What&apos;s included?</Text>
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
                        Starts at $800, Contact us for a custom quote!
                </Box>
            </Card>

            <Card bgColor='#E3DDD5' align='center' height={[null, null, '60%']}>    
                <CardHeader><Heading>TAKE IT EASY</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <Box>
                        {/* <Image
                            src="/take_it_easy_2.webp"
                            width={300}
                            height={300}
                        /> */}
                        <Text fontSize='xl' mb="6" mt="2" fontWeight='bold'>What&apos;s included?</Text>
                        <Text></Text>
                        <UnorderedList maxW={300} listStylePos='inside' textAlign='left' style={{ display: 'inline-block' }}>
                            <ListItem></ListItem>
                            <ListItem>Clean up and Pickup</ListItem>
                        </UnorderedList>
                    </Box>
                    <Spacer />
                    <Box align='center'>
                        <Text fontSize='md' mt='10' fontWeight='bold' maxW='250'>All Alcohol & Mixers must be provided by customer</Text>
                    </Box>
                </CardBody>
                <CardFooter></CardFooter>
                <Box layerStyle='customBox'>
                        Starts at $800, Contact us for a custom quote!
                </Box>
            </Card>
            </SimpleGrid>

            <br/>

            <SimpleGrid columns={[1, 1, 3]} mx={10} pb='5' gap={12}>
                <Box height={555}>
                    <Carousel hasMediaButton={false} hasSizeButton={false} hasIndexBoard={false} hasThumbnails={false} isAutoPlaying={true} images={addonImgs} leftIcon={<ChevronLeftIcon w={10} h={10} color='gray.300'/>} rightIcon={<ChevronRightIcon w={10} h={10} color='gray.300'/>}/>
                </Box>

                <Card align='center'>
                    <CardHeader><Heading>Addons</Heading></CardHeader>
                    <CardBody>
                        <UnorderedList listStylePos='inside'>
                            <ListItem>Bartender Service</ListItem>
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