import React from "react";
import Image from "next/image";
import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";

function teamComp() {
    return (
        <>
            <Box align='center' my='10'>
                <Heading size='2xl' as='a' href='/team'>Meet the Team!</Heading>
            </Box>

            <SimpleGrid columns={[1, 2, 3, 3, 3]} justifyItems="center" alignItems='center' align='center' mx='auto'>
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
                </Box>
            </SimpleGrid>
        </>
    )
}

export default teamComp;