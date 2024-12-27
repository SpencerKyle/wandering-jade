import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text, _hover, VStack, HStack, Flex, Center } from '@chakra-ui/react'

function Footer() {
    return (
        <Box bgColor='gray.50'>
            <Box bgColor='#d1bc98'>
                <Flex height="35vh" justifyContent="center" alignItems='center'>
                    <VStack spacing={2}>
                    <Image
                        src='/logo-footer.png'
                        height={200}
                        width={200}
                        alt='wandering jade logo'
                    />
                    <Text fontSize={['xl', null, 'xl']}><a href='mailto:wanderingjadebar@gmail.com'>WANDERINGJADEBAR@GMAIL.COM</a></Text>
                    <Text fontSize={['xl', null, 'xl']}><a href="tel:8013587167">801-358-7167</a></Text>
                    <HStack spacing={5}>
                        <a href='https://www.facebook.com/profile.php?id=100093143334442' target="_blank">
                            <Image 
                                src='/facebook.svg'
                                width={30}
                                height={30}
                                alt='facebook logo'
                                />
                        </a>
                        <a href="https://www.tiktok.com/@wanderingjadebar" target="_blank">
                            <Image 
                                src='/tiktok-sq.svg'
                                width={30}
                                height={30}
                                alt='tik tok logo'
                                />
                        </a>
                        <a href="https://instagram.com/wanderingjadebar" target="_blank">
                            <Image 
                                src='/instagram-fill.svg'
                                width={30}
                                height={30}
                                alt='instagram logo'
                                />
                        </a>
                    </HStack>
                    </VStack>
                </Flex>
            </Box>
        </Box>
    )
}

export default Footer;