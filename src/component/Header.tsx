import { Heading, Icon } from '@chakra-ui/react'
import { BsHandbag } from 'react-icons/bs'
import {
  MotionFlex as Flex,
  MotionBox as Box,
  MotionText as Text,
  MotionIconButton as IconButton
} from './framer'

const variant = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity:1,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
      staggerChildren: 0.1
    },
  },
}

function Header() {
  return (
    <Box>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Heading fontSize={'2xl'} mb={'5'}>
          Glow
          <Text
            as={'span'}
            fontWeight={'extrabold'}
            fontSize={'4xl'}
            color={'orange.400'}
          >
            .
          </Text>
        </Heading>
        <Box>
          <Flex
            alignItems={'center'}
            gap={'10'}
            variants={variant}
            initial="hidden"
            animate="show"
          >
            <Text>Product</Text>
            <Text>About</Text>
            <Text>Blog</Text>
            <Text>Reviews</Text>
            <IconButton
              bg={'orange.400'}
              color={'white'}
              borderRadius={'full'}
              icon={<Icon as={BsHandbag} />}
              variants={variant}
              aria-label={''}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
