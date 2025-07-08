import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Text, UnorderedList, Box, ListItem, SimpleGrid, Heading, Spacer, Divider, AbsoluteCenter } from '@chakra-ui/react'

function Service() {
    return(
    <>       
        <Box align='center'>
            <Heading size='2xl' as='a' href='/services'>Services</Heading>
                
            <Text align='center' mt='5'>
                Please note: All packages are dry service and do not include alcohol or mixers. These must be supplied by the customer.
            </Text>

            <Text align='center' mt='5'>
                All packages include a custom printed menu, ice, drinkware, water station, bar equipment, and bar set up! (4 Hour Minimum Required)
            </Text>
        </Box>
        <Box width={['100%', "100%", null, null, "90%"]}  mx='auto'>
            <SimpleGrid columns={[1, 2, 3, 3, 3]} spacing={10} pb={10} pt={20} justifyItems="center" order={[1, 1]} alignItems='center' mx='auto'>
                    <Card layerStyle={['serviceCard', 'serviceCardHover']} bgColor='#E3DDD5'>    
                        <CardHeader><Heading>Take It Easy</Heading></CardHeader>
                        <CardBody >
                            <UnorderedList>
                                <ListItem>2 Certified Bartenders</ListItem>
                                <ListItem>Beer, Wine, & Bubbles Service</ListItem>
                            </UnorderedList>
                        </CardBody>
                        <CardFooter></CardFooter>
                            <Box layerStyle='customBox' as='a' href='/form?package=Take%20it%20Easy'>
                                    Click here for your own custom quote!
                            </Box>
                    </Card>
        
                    <Card layerStyle={['serviceCard', 'serviceCardHover']} bgColor='#C1C9AF' order={[2, 3]}>
                        <CardHeader><Heading>Perfect Match</Heading></CardHeader>
                        <CardBody>
                            <Box>
                                <UnorderedList>
                                    <ListItem>2 Certified Bartenders</ListItem>
                                    <ListItem>2 Spirit Options</ListItem>
                                    <ListItem>3 Beer/Seltzer Options</ListItem>
                                    <ListItem>2 Seltzer Options</ListItem>
                                    <ListItem>3 Mixer Options</ListItem>
                                    <ListItem>Garnishes</ListItem>
                                </UnorderedList>
                            </Box>
                        </CardBody>
                        <CardFooter></CardFooter>
                        <Box layerStyle='customBox' as='a' href='/form?package=Perfect%20Match'>
                                Click here for your own custom quote!
                        </Box>
                    </Card>
        
                    <Card layerStyle={['serviceCard', 'serviceCardHover']} bgColor='#E6EDf5' order={[3, 2]}>
                        <CardHeader><Heading>Going All Out</Heading></CardHeader>
                        <CardBody>
                            <Box>
                                <UnorderedList>
                                    <ListItem>2 Certified Bartenders</ListItem>
                                    <ListItem>3 Spirit Options</ListItem>
                                    <ListItem>3 Beer/Seltzer Options</ListItem>
                                    <ListItem>5 Mixers Options</ListItem>
                                    <ListItem>Premium Garnishes</ListItem>
                                    <ListItem>Shopping List Guide</ListItem>
                                    <ListItem>Custom Simple Syrups</ListItem>
                                    <Box position='relative' padding='5'>
                                        <Divider borderColor={'gray.400'} />
                                            <AbsoluteCenter bg='#E6EDf5' px='2'>
                                                +
                                        </AbsoluteCenter>
                                    </Box>
                                    <ListItem>Soda Bar or Alcohol Service</ListItem>
                                </UnorderedList>
                            </Box>
                            <Spacer />
                        </CardBody>
                        <CardFooter></CardFooter>
                        <Box layerStyle='customBox' as='a' href='/form?package=Going%20All%20Out'>
                                Click here for your own custom quote!
                        </Box>
                    </Card>
            </SimpleGrid>
        </Box>
        </>
    )
}

export default Service;