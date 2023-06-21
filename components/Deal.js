import React from 'react'
import { Heading } from '@chakra-ui/react'

function Deal() {
    return (
        <Heading fontFamily='banner' align='center' bgColor='#5c7551' color='white' p='3' size={['md',null ,'lg']} top={0} width='100%' zIndex={10000} mt={['14', '0', '0']}>Grand Opening Sale! $100 off when you put a deposit down in July</Heading>
    )
}

export default Deal;