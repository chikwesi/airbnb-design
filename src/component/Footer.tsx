import {
  Text,
  Container,
  Icon,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Heading,
} from '@chakra-ui/react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaRegPaperPlane,
  FaRegCopyright,
} from 'react-icons/fa'
import { SlideUpItemVariant, SlideUpVariant } from '../framer-variants'
import {
  MotionBox as Box,
  MotionVStack as VStack,
  MotionFlex as Flex,
} from './framer'

function Footer() {
  return (
    <Box as={'footer'} bgColor={'blue.900'} color={'white'}>
      <Container maxW={'container.lg'} textAlign="left" pt={32}>
        <Flex
          pt={32}
          pb={'20'}
          gap={'5'}
          fontSize={'xs'}
          variants={SlideUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Box minWidth={'25%'} variants={SlideUpItemVariant}>
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
            <Text mb={'5'} textTransform={'capitalize'}>
              keep up iwth out new releases, beauty tips an what emma's been up
              to.
            </Text>
            <Flex gap={'3'}>
              <Icon as={FaFacebookF} />
              <Icon as={FaInstagram} />
              <Icon as={FaTwitter} />
              <Icon as={FaLinkedin} />
            </Flex>
          </Box>
          <Box width={'100%'}>
            <VStack alignItems={'start'} variants={SlideUpItemVariant}>
              <Text>company</Text>
              <Text>About</Text>
              <Text>Jobs</Text>
              <Text>Branding</Text>
              <Text>Newsroom</Text>
            </VStack>
          </Box>
          <Box width={'100%'}>
            <VStack alignItems={'start'} variants={SlideUpItemVariant}>
              <Text>Resources</Text>
              <Text>About</Text>
              <Text>Jobs</Text>
              <Text>Branding</Text>
              <Text>Newsroom</Text>
            </VStack>
          </Box>
          <Box width={'100%'}>
            <VStack alignItems={'start'} variants={SlideUpItemVariant}>
              <Text>Terms & Condition</Text>
              <Text>Policy</Text>
              <Text>Faq</Text>
              <Text>Return & Delivery</Text>
              <Text>Tracking</Text>
            </VStack>
          </Box>
          <Box width={'100%'}>
            <VStack
              spacing={'3'}
              alignItems={'start'}
              height={'full'}
              variants={SlideUpItemVariant}
            >
              <Text>Subscribe</Text>
              <Text>Get 10% off your first order</Text>
              <InputGroup>
                <Input
                  borderRadius={'full'}
                  placeholder="Enter your Email"
                  border={'none'}
                  bg={'blue.800'}
                  _placeholder={{ fontSize: '12px' }}
                />
                <InputRightElement
                  children={
                    <IconButton
                      borderRadius={'full'}
                      border={'1px'}
                      colorScheme={'orange'}
                      icon={<FaRegPaperPlane />}
                      aria-label={''}
                    />
                  }
                />
              </InputGroup>
            </VStack>
          </Box>
        </Flex>
        <Flex justifyContent={'center'}>
          <Flex
            borderTop={'1px'}
            borderColor={'gray.500'}
            p={'5'}
            fontSize={'xs'}
            alignItems={'center'}
            gap={'2'}
            color={'gray.500'}
          >
            Copyright <Icon as={FaRegCopyright} /> 22 Victor | All rights
            reserved{' '}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
