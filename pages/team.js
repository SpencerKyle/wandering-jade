import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Team() {
    return (
        <>
            <Box p='20' bgColor='gray.50' align='center' width="100%" display='flex' flexDirection='column'>
                <Heading mb='100'>Meet the team!</Heading>

                <Box align='left' display='flex'>
                    <Box layerStyle='galleryItem'>
                        <Image
                        src='/team/placeholder01.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Gallery picture for the Wandering Jade'
                        />
                    </Box>
                    <Box maxW='40%'>
                        <Heading>Edwardo</Heading>
                        <Text>This is a bio about Edwardo the Vampire, he is pretty old and his skin sparkles when hit by direct sunlight. He is kinda cringe sometimes but makes up for it by being an extremely good baseball player. His toxic trait is that he can read peoples thoughts and emotions unless your name is Bella Swan.</Text>
                    </Box>
                </Box>
                
                <Box align='right' display='flex' flexDirection='row-reverse'>
                    <Box layerStyle='galleryItem'>
                        <Image 
                        src='/team/placeholder02.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Gallery picture for the Wandering Jade'
                        />
                    </Box>
                    <Box maxW='40%'>
                        <Heading>Bella</Heading>
                        <Text>Imagine a toddler drawing cartoon images of peoples emotions. . . now imagine how that would look on a real person . . . you're imagining Bella Swan. We do need to give her SOME credit as her acting did improve over the 8 years of the movies existence. She just really wants to be a vampire and doesn't really care about the consequences.</Text>
                    </Box>
                </Box>

                <Box align='left' display='flex'>
                    <Box layerStyle='galleryItem'>
                        <Image 
                        src='/team/placeholder03.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Gallery picture for the Wandering Jade'
                        />
                    </Box>
                    <Box maxW='40%'>
                        <Heading>Jacob</Heading>
                        <Text>Man-child. Jacob is actually a furry who can't control his emotions and ends up falling in love with a child. Too many red flags.</Text>
                    </Box>
                </Box>

                <Box align='right' display='flex' flexDirection='row-reverse'>
                    <Box layerStyle='galleryItem'>
                        <Image 
                        src='/team/placeholder04.webp'
                        fill
                        sizes='100%'
                        style={{objectFit:"contain"}}
                        alt='Gallery picture for the Wandering Jade'
                        />
                    </Box>
                    <Box maxW='40%'>
                        <Heading>Dad</Heading>
                        <Text>Despite leaving Bella's Mother to pursue the life on the Washington Frontier, Dad is a great dad who wants to see his daughter grow up stuff. Unfortunately for him she is now a vampire. Cool guy, 10/10 glad he didn't die.</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}