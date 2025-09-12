import React from "react";
import Image from "next/image";
import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";

function teamComp() {
    return (
        <>
            <Box align='center' my='10'>
                <Heading size='2xl' as='a' href='/team'>Meet the Team!</Heading>
            </Box>

            <SimpleGrid columns={[1, 2, 3, 3, 3]} justifyItems="center" alignItems='start' align='center' mx='auto'>
                <Box width='300px'>
                    <Text layerStyle='teamName'>Amberdee</Text>
                    <Text mb='3'>Owner/Bartender</Text>
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/bartender1.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Amberdee in the Wandering Jade'
                        />
                    </Box>
                    <Text>Hi! I’m Amberdee, mobile bar owner by night and law enforcement by day. I’ve always had a love for DIY projects, being crafty and creating spaces where people can have a great time. This business started as a passion project and has quickly become one of my favorite adventures. My go-to drink is a fresh lime aka vodka soda with sweetened lime (my secret ingredient)</Text>
                </Box>

                <Box width='300px'>
                <Text layerStyle='teamName'>Katelynn</Text>
                <Text mb='3'>Bartender</Text>
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/katelynnbartender-1.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Katelynn in a field'
                        />
                    </Box>
                    <Text>Hey! I’m Katelynn, bartender, social media manager and proud hype girl of the team! I love getting to connect with people, keeping the vibes high and keeping the drinks flowing. My go-to drink is a Titos gingerale with lime.</Text>
                </Box>

                <Box width='300px'>
                <Text layerStyle='teamName'>Jake</Text>
                <Text mb='3'>Bartender</Text>                    
                    <Box layerStyle='teamItem'>
                        <Image
                        src='/team/jakebartender.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Picture of Jake in a field'
                        />
                    </Box>
                    <Text>Hey, I’m Jake. I’m one of the friendly faces behind the bar, and probably the one who fixes the trailer before your event! I love tinkering with tools and helping out with anything mechanical. My go-to drink is a Captain dr. pepper.</Text>
                </Box>
            </SimpleGrid>
        </>
    )
}

export default teamComp;