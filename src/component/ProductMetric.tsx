import { Box, Text } from '@chakra-ui/react'
import { MotionBox } from './framer'

type MetricT = {
  name?: string | JSX.Element
  value?: string
  revertBg?: boolean
  [option: string]: any
}

const ProductMetric = ({
  name = '',
  value = '',
  revertBg,
  ...rest
}: MetricT) => {
  return (
    <MotionBox {...rest}>
      <Box
        py={'10'}
        px={'10'}
        bgGradient={`linear-gradient(180deg, ${
          !revertBg ? ' white, red.100 80%' : 'red.100 20%, white 80%'
        })`}
        borderRadius={'full'}
        transform="rotate(30deg)"
        flex={0}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box transform="rotate(-30deg)" textAlign={'center'}>
          <Text mb={'2.5'} fontSize={'sm'}>
            {name}
          </Text>
          <Text color={'orange.400'} fontSize={'4xl'}>
            {value}
          </Text>
        </Box>
      </Box>
    </MotionBox>
  )
}

export default ProductMetric
