import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
import Teams from '../components/Team'

export default function Team() {
    return (
        <>
            <Head>
                <title>Wandering Jade | Team</title>
            </Head>
            <Box p='10' bgColor='gray.50' align='center' width="100%">
                <Teams />
            </Box>
        </>
    )
}