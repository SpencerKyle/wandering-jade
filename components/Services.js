import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Text, UnorderedList, Box, ListItem, SimpleGrid, Heading, Spacer, Divider, AbsoluteCenter } from '@chakra-ui/react'

function Service() {
    return(
    <>       
        <Box width={['100%', "100%", null, null, "90%"]}  mx='auto'>
            <SimpleGrid columns={[1, 2, 3, 3, 3]} spacing={10} pb={10} pt={20} justifyItems="center" order={[1, 1]} alignItems='center' mx='auto'>
                    <Card layerStyle={['serviceCard', 'serviceCardHover']} bgColor='#E3DDD5'>    
                        <CardHeader>
                            <Heading>Take It Easy</Heading>
                        </CardHeader>
                        <CardBody >
                            <UnorderedList>
                                <ListItem fontSize={'xl'}>Beer</ListItem>
                                <ListItem fontSize={'xl'}>Wine</ListItem>
                                <ListItem fontSize={'xl'}>Bubbles Service</ListItem>
                            </UnorderedList>
                        </CardBody>
                        <CardFooter></CardFooter>
                            <Box layerStyle='customBox' as='a' href='/form?package=Take%20it%20Easy'>
                                    $250/hr
                            </Box>
                    </Card>
        
                    <Card layerStyle={['serviceCard', 'serviceCardHover']} bgColor='#C1C9AF' order={[2, 3]}>
                        <CardHeader><Heading>Perfect Match</Heading></CardHeader>
                        <CardBody>
                            <Box>
                                <UnorderedList>
                                    <ListItem fontSize={'xl'}>1 Signature Drink</ListItem>
                                    <ListItem fontSize={'xl'}>2 Spirit Options</ListItem>
                                    <ListItem fontSize={'xl'}>2 Beer/Seltzer Options</ListItem>
                                    <ListItem fontSize={'xl'}>1 Wine Option</ListItem>
                                    <ListItem fontSize={'xl'}>3 Mixer Options</ListItem>
                                    <ListItem fontSize={'xl'}>Garnishes</ListItem>
                                </UnorderedList>
                            </Box>
                        </CardBody>
                        <CardFooter></CardFooter>
                        <Box layerStyle='customBox' as='a' href='/form?package=Perfect%20Match'>
                                $275/hr
                        </Box>
                    </Card>
        
                    <Card layerStyle={['serviceCard', 'serviceCardHover']} bgColor='#E6EDf5' order={[3, 2]}>
                        <CardHeader><Heading>Going All Out</Heading></CardHeader>
                        <CardBody>
                            <Box>
                                <UnorderedList>
                                    <ListItem fontSize={'xl'}>2 Signature Drinks</ListItem>
                                    <ListItem fontSize={'xl'}>3 Spirit Options</ListItem>
                                    <ListItem fontSize={'xl'}>3 Beer/Seltzer Options</ListItem>
                                    <ListItem fontSize={'xl'}>2 Wine Options</ListItem>
                                    <ListItem fontSize={'xl'}>5 Mixer Options</ListItem>
                                    <ListItem fontSize={'xl'}>1 Custom Simple Syrup</ListItem>
                                    <ListItem fontSize={'xl'}>Garnishes</ListItem>
                                    <Box position='relative' padding='5'>
                                        <Divider borderColor={'gray.400'} />
                                            <AbsoluteCenter bg='#E6EDf5' px='2'>
                                                +
                                        </AbsoluteCenter>
                                    </Box>
                                    <ListItem fontSize={'xl'}>Soda Bar or Alcohol Service</ListItem>
                                </UnorderedList>
                            </Box>
                            <Spacer />
                        </CardBody>
                        <CardFooter></CardFooter>
                        <Box layerStyle='customBox' as='a' href='/form?package=Going%20All%20Out'>
                                $300/hr
                        </Box>
                    </Card>
            </SimpleGrid>
        </Box>
        </>
    )
}

export default Service;