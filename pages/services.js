import { Card, CardHeader, CardBody, CardFooter, UnorderedList, Box, ListItem, Text, SimpleGrid, Flex, Heading, Spacer } from '@chakra-ui/react'
import Image from 'next/image'

export default function Services() {


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
                        <Text fontSize='xl' mb="6" mt="2" fontWeight='bold'>What's included?</Text>
                        <UnorderedList maxW={250} listStylePos='inside' textAlign='left'>
                            <ListItem>Bar Delivery and Set up</ListItem>
                            <ListItem>Bar Consultation/Drink Tasting</ListItem>
                            <ListItem>Custom Drink Menu (garnishes provided)</ListItem>
                            <ListItem>Bartender Service Up to 5 hours</ListItem>
                            <ListItem>100 lbs of ice</ListItem>
                            <ListItem>Cups and Straws</ListItem>
                            <ListItem>Koozies</ListItem>
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
                    <Text fontSize='xl' mb="6" mt="2" fontWeight='bold'>What's included?</Text>
                    <UnorderedList maxW={250} listStylePos='inside' textAlign='left'>
                        <ListItem>Bar Delivery and Set up</ListItem>
                        <ListItem>Clean up and pickup</ListItem>
                        <ListItem>Custom Drink Menu garnishes provided if applicable</ListItem>
                        <ListItem>100 lbs of ice</ListItem>
                        <ListItem>Water Station</ListItem>
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
                        <Text fontSize='xl' mb="6" mt="2" fontWeight='bold'>What's included?</Text>
                        <UnorderedList maxW={250} listStylePos='inside' textAlign='left'>
                            <ListItem>Bar Delivery and Set up</ListItem>
                            <ListItem>Clean up and pickup</ListItem>
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
            <SimpleGrid columns={[1, 1, 2]} mx={10}>
                <Card align='center' flex='1'>
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
                        <Box my='5' align='center'>
                        <Image 
                            src='/drink-menu2.png'
                            width={300}
                            height={600}
                        />
                        </Box>
            </SimpleGrid>
        </Box>
    )
}