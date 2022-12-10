import { Heading, Icon, IconButton } from '@chakra-ui/react'
import { BsHandbag } from 'react-icons/bs'
import {
  MotionFlex as Flex,
  MotionBox as Box,
  MotionText as Text,
} from './framer'

const variant = {
  hidden: {
    y: '-100px',
  },
  show: {
    y: 0,
    transition: {
      // ease: 'easeIn',
      duration: 1.2,
      // when: 'beforeChildren',
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
        <Box variants={variant} initial="hidden" animate="show">
          <Flex alignItems={'center'} gap={'10'}>
            <Text>Product</Text>
            <Text>About</Text>
            <Text>Blog</Text>
            <Text>Reviews</Text>
            <IconButton
              bg={'orange.400'}
              color={'white'}
              borderRadius={'full'}
              icon={<Icon as={BsHandbag} />} aria-label={''}            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
