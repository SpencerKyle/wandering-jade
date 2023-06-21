import { Card, CardHeader, CardBody, CardFooter, UnorderedList, Box, ListItem, Text, SimpleGrid, Flex, Heading, Spacer, ChakraProvider, AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

export default function Services() {
    const addonImgs = [`slide-1.JPG`, 'slide-2.JPG', 'slide-3.JPG', 'slide-4.JPG', 'slide-5.JPG', 'slide-6.JPG', 'slide-7.JPG', 'slide-8.JPG', 'slide-9.png'].map((number) => ({
        src: `/${number}`,
        alt: "picture"
    }));

    return (
        <Box bgColor='gray.50'>
            <SimpleGrid columns={[1, 1, 3]} spacing={10} mx={10} pb={10} pt={5}>
                
            <Card bgColor='white' align='center'>
                <CardHeader><Heading>Going all Out</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <Box>
                        <Image
                            src="/going_all_out.png"
                            width={300}
                            height={300}
                        />
                        <Text fontSize='xl' mb="6" mt="2" fontWeight='bold'>What&apos;s included?</Text>
                        <UnorderedList maxW={250} listStylePos='inside' textAlign='left' style={{ display: 'inline-block' }}>
                            <ListItem>Bar Delivery and Set up</ListItem>
                            <ListItem>Bar Consultation/Drink &nbsp;&nbsp;&nbsp;Tasting (prior to event)</ListItem>
                            <ListItem>Bartender Service<br></br>&nbsp;&nbsp;&nbsp;(Up to 5 hours)</ListItem>
                            <ListItem>Cups and Straws</ListItem>
                            <ListItem>Koozies</ListItem>
                            <ListItem>Custom Drink Menu <br></br>&nbsp;&nbsp;&nbsp;(garnishes provided)</ListItem>
                            <ListItem>100 lbs of ice</ListItem>
                            <ListItem>Water Station</ListItem>
                            <ListItem>Clean up and Pickup</ListItem>
                        </UnorderedList>
                    </Box>
                    <Spacer />
                    <Box>
                        <Text fontSize='xl' mt="10" fontWeight='bold'>$950+</Text>
                        <Text fontSize='md' mt='10' fontWeight='bold' maxW='250'>All Alcohol & Mixers must be provided by customer</Text>
                    </Box>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>

            <Card bgColor='white' align='center'>
                <CardHeader><Heading>Perfect Match</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <Box>
                    <Image
                        src="/perfect_match.png"
                        width={300}
                        height={300}
                    />
                    <Text fontSize='xl' mb="6" mt="2" fontWeight='bold'>What&apos;s included?</Text>
                    <UnorderedList maxW={300} listStylePos='inside' textAlign='left' style={{ display: 'inline-block' }}>
                        <ListItem>Bar Delivery and Set up</ListItem>
                        <ListItem>Custom Drink Menu<br></br>&nbsp;&nbsp;&nbsp;(garnishes provided)</ListItem>
                        <ListItem>100 lbs of ice</ListItem>
                        <ListItem>Water Station</ListItem>
                        <ListItem>Clean up and Pickup</ListItem>
                    </UnorderedList>
                    </Box>
                    <Spacer />
                    <Box>
                        <Text fontSize='xl' mt="10" fontWeight='bold'>$750+</Text>
                        <Text fontSize='md' mt='10' fontWeight='bold' maxW='250'>All Alcohol & Mixers must be provided by customer</Text> 
                    </Box>
                    </CardBody>
                <CardFooter></CardFooter>
            </Card>

            <Card bgColor='white' align='center'>    
                <CardHeader><Heading>Take it Easy</Heading></CardHeader>
                <CardBody display='flex' flex='1' flexDirection='column' justifyContent='space-between' align='center'>
                    <Box>
                        <Image
                            src="/take_it_easy.png"
                            width={300}
                            height={300}
                        />
                        <Text fontSize='xl' mb="6" mt="2" fontWeight='bold'>What&apos;s included?</Text>
                        <UnorderedList maxW={300} listStylePos='inside' textAlign='left' style={{ display: 'inline-block' }}>
                            <ListItem>Bar Delivery and Set up</ListItem>
                            <ListItem>Clean up and Pickup</ListItem>
                        </UnorderedList>
                    </Box>
                    <Spacer />
                    <Box align='center'>
                        <Text fontSize='xl' mt="10" fontWeight='bold'>$700+</Text>
                        <Text fontSize='md' mt='10' fontWeight='bold' maxW='250'>All Alcohol & Mixers must be provided by customer</Text>
                    </Box>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
            </SimpleGrid>

            <SimpleGrid columns={[1, 2, 3]} mx={10} pb='5' gap={12}>
                <Box height={400}>
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
                        src='/custom-drinks.png'
                        width={400}
                        height={600}
                    />
                </Box>
            </SimpleGrid>
        </Box>
    )
}