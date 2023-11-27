import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text, _hover, VStack, HStack, Flex, Center } from '@chakra-ui/react'

function Footer() {
    return (
        <Box bgColor='gray.50' p={['2', null, '2']}>
            <Box bgColor='#5c7551'>
                <Flex height="50vh" justifyContent="center" alignItems="center">
                    <Center>
                    <VStack spacing={2}>
                    <Image 
                        src='/logo-trans.png'
                        height={200}
                        width={200}
                        alt='wandering jade logo'
                    />
                    <Text fontSize={['xl', null, 'xl']}><a href='mailto:wanderingjadebar@gmail.com'>wanderingjadebar@gmail.com</a></Text>
                    <Text fontSize={['xl', null, 'xl']}><a href="tel:8013587167">801-358-7167</a></Text>
                    <HStack spacing={2}>
                        <a href='https://www.facebook.com/profile.php?id=100093143334442' target="_blank">
                            <Image 
                                src='/facebook.svg'
                                width={30}
                                height={30}
                                alt='facebook logo'
                                />
                        </a>
                        <a href="https://www.tiktok.com/@wandering.jade_bar" target="_blank">
                            <Image 
                                src='/tiktok-sq.svg'
                                width={30}
                                height={30}
                                alt='tik tok logo'
                                />
                        </a>
                        <a href="https://instagram.com/wandering.jade.bar" target="_blank">
                            <Image 
                                src='/instagram-fill.svg'
                                width={30}
                                height={30}
                                alt='instagram logo'
                                />
                        </a>
                    </HStack>
                    </VStack>
                    </Center>
                </Flex>
            </Box>
        </Box>
    )
}

export default Footer;