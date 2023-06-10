import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text, _hover, VStack, HStack, Flex } from '@chakra-ui/react'

function Footer() {
    return (
        <Box bgColor='#5c7551' align='center' height={400} p='10'>
            <Flex justify='center' align='center'>
            <VStack>
            <Image 
                src='/wandering-jade-4.png'
                height={200}
                width={200}
                alt='wandering jade logo'
            />
            <Text fontSize='xl'><a href='mailto:wanderingjadebar@gmail.com'>wanderingjadebar@gmail.com</a></Text>
            <Text fontSize='xl'><a href="tel:8018280319">801-358-7167</a></Text>
            <HStack>
                <a href='https://www.facebook.com/profile.php?id=100093143334442'>
                    <Image 
                        src='/facebook.svg'
                        width={45}
                        height={45}
                        />
                </a>
                <a href="https://www.tiktok.com/@wandering.jade_bar">
                    <Image 
                        src='/tiktok-sq.svg'
                        width={45}
                        height={45}
                        />
                </a>
                <a href="https://instagram.com/wandering.jade.bar">
                    <Image 
                        src='/instagram-fill.svg'
                        width={45}
                        height={45}
                        />
                </a>
            </HStack>
            </VStack>
            </Flex>
        </Box>
    )
}

export default Footer;