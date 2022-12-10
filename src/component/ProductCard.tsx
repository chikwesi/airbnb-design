import { Box, Image, Text } from '@chakra-ui/react'
import { MotionVStack as VStack } from './framer'

export type ProductCardT = {
    img?: string,
    name?: string,
    cost?: string,
    [name: string]: any
}

const ProductCard = ({ img = '', name = '', cost = '', ...rest } : ProductCardT) => {
  return (
    <VStack width={'full'} {...rest}>
      <Box
        width={'100%'}
        bgColor={'white'}
        _before={{ content: "''", paddingTop: '100%', float: 'left' }}
      >
        <Image src={img}></Image>
      </Box>
      <Text>{name}</Text>
      <Text>${cost}</Text>
    </VStack>
  )
}

export default ProductCard
