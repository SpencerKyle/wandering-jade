import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flex, Spacer, Box, Text, _hover, useMediaQuery, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerCloseButton, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";


function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isMobile] = useMediaQuery('(max-width: 767px)');

    return (
        <Box bgColor='gray.50'>
                {isMobile && (
                    <>
                        <Box bgColor='gray.50' align='center'>
                            <Image 
                                src="/wandering-jade-4.png"
                                width={250}
                                height={250}
                                alt='wadnering jade logo'
                            />
                        </Box>
                        <Box>
                        <Box ref={btnRef} onClick={onOpen} pos='absolute' size='lg' top='0' right='0'>
                            <HamburgerIcon boxSize='8' m='3'/>
                        </Box>
                        <Drawer
                            isOpen={isOpen}
                            placement="top"
                            onClose={onClose}
                            finalFocusRef={btnRef}
                            size='xl'
                        >
                            <DrawerOverlay>
                                <DrawerContent>
                                    <DrawerCloseButton />
                                    <DrawerBody align='center'>
                                        <Link href='/'><Text my='5' fontSize='xl' onClick={onClose}>Home</Text></Link>
                                        <Link href='/services'><Text my='5' fontSize='xl' onClick={onClose}>Services</Text></Link>
                                        <Link href='/faq'><Text my='5' fontSize='xl' onClick={onClose}>FAQ</Text></Link>
                                        <Link href='/form'><Box p={3} borderRadius={15} bg="#E6BDBE" onClick={onClose}><Text as='b' fontSize='xl' color='white'>Get a Quote</Text></Box></Link>
                                    </DrawerBody>
                                </DrawerContent>
                                </DrawerOverlay>
                        </Drawer>
                        </Box>
                    </>
                )}

                {!isMobile && (
                <>
                    <Flex ml={10} mr={10} >
                    <Image 
                        src="/wandering-jade-4.png"
                        width={250}
                        height={250}
                    />

                    <Spacer />
                    <Flex direction="row" align="center" gap='6'>
                        <Box><Link href="/"><Text as='b' fontSize='xl' _hover={{ color: "#E6A3A4" }}>Home</Text></Link></Box>
                        <Box><Link href="/services"><Text as='b' fontSize='xl' _hover={{ color: "#E6A3A4" }}>Services</Text></Link></Box>
                        <Box><Link href="/faq"><Text as='b' fontSize='xl' _hover={{ color: "#E6A3A4" }}>FAQ</Text></Link></Box>
                        <Link href="/form"><Box p={3} borderRadius={15} bg="#E6BDBE" _hover={{ bgColor: '#E6A3A4' }}><Text as='b' fontSize='xl' color='white'>Get a Quote</Text></Box></Link>
                    </Flex>
                    </Flex>
                </>
            )}
        </Box>
    )
}

export default Header;