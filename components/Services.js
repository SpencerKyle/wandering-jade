import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Text, UnorderedList, Box, ListItem, SimpleGrid, Heading, Spacer } from '@chakra-ui/react'

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
                    <Card layerStyle='serviceCard' bgColor='#E3DDD5'>    
                        <CardHeader><Heading>Take It Easy</Heading></CardHeader>
                        <CardBody >
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
                                    <ListItem>Shopping List Guide</ListItem>
                                    <ListItem>Custom Simple Syrups</ListItem>
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
        </Box>
        </>
    )
}

export default Service;