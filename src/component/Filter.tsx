import {
  Container,
  Grid,
  Heading,
  IconButton,
  Icon,
  GridItem,
  Flex,
  Select,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  HStack,
  Text,
  FormControl,
  FormLabel,
  Checkbox,
  Button,
  Stack,
  calc,
} from '@chakra-ui/react'
import { MotionBox as Box } from './framer'
import { ImMap2 } from 'react-icons/im'
import { BiGridAlt } from 'react-icons/bi'
import { CiCalendar } from 'react-icons/ci'
import { FiMinus, FiPlus, FiFilter } from 'react-icons/fi'

type StickyFilterProp = {
  toggleFilter: () => void
}

export const StickyFilter = (prop: StickyFilterProp) => {
  return (
    <Container
      minW={'100%'}
      py={'2'}
      px={7}
      top="0px"
      pos="sticky"
      zIndex="2"
      background="white"
      borderBottom="1px"
      borderColor="gray.200"
      height="8vh"
    >
      <Grid
        templateColumns=".5fr 1fr .5fr"
        alignItems="center"
        justifyContent="space-between"
        height="full"
      >
        <Heading fontSize="2xl" justifySelf="flex-start">
          <Box borderRadius="lg" bgColor="blackAlpha.200">
            <IconButton
              aria-label={''}
              borderRadius="lg"
              bgColor="black"
              color="white"
              icon={<Icon as={BiGridAlt} />}
              size="lg"
              variant="solid"
              _hover={{
                bgColor: 'black',
              }}
            />
            <IconButton
              icon={<Icon as={ImMap2} />}
              variant="ghost"
              aria-label={''}
              size="lg"
            />
          </Box>
        </Heading>
        <GridItem justifySelf="center">
          <Flex alignItems="center" gap="2">
            <Select
              borderRadius="xl"
              variant="filled"
              bgColor="blackAlpha.200"
              placeholder="Anywhere"
            />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={CiCalendar} />}
              />
              <Input
                borderRadius="xl"
                variant="filled"
                bgColor="blackAlpha.200"
                defaultValue="June 14 - 21"
              ></Input>
            </InputGroup>

            {/* TODO: Fix icon */}
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <IconButton
                    aria-label={''}
                    borderRadius={'lg'}
                    bg="white"
                    color={'red'}
                    icon={<Icon as={FiMinus} />}
                    size="sm"
                  />
                }
              />
              <Input
                borderRadius="xl"
                variant={'filled'}
                bgColor="blackAlpha.200"
                defaultValue="4 guests"
              ></Input>
              <InputRightElement
                pointerEvents="none"
                children={
                  <IconButton
                    aria-label={''}
                    borderRadius="lg"
                    bg="white"
                    color="red"
                    icon={<Icon as={FiPlus} />}
                    size="sm"
                  />
                }
              />
            </InputGroup>
          </Flex>
        </GridItem>
        <GridItem justifySelf="end">
          <IconButton
            bg="blackAlpha.200"
            borderRadius="lg"
            icon={<Icon as={FiFilter} />}
            aria-label={''}
            size="lg"
            onClick={() => prop.toggleFilter()}
          />
        </GridItem>
      </Grid>
    </Container>
  )
}

export const MoreFilters = ({
  showFilter = false,
}: {
  showFilter: boolean
}) => {
  const parentVariants = {
    open: {
      display: 'block',
      transition: {
        when: 'beforeChildren',
      },
    },
    closed: {
      display: 'none',
      transition: {
        delay: .3,
        when: 'afterChildren',
      },
    },
  }
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: '100%' },
  }

  return (
    <Box
      position="fixed"
      right={0}
      bottom={0}
      width="100%"
      height="100%"
      initial="closed"
      animate={showFilter ? 'open' : 'closed'}
      variants={parentVariants}
    >
      <Box
        position="fixed"
        right={0}
        bottom={0}
        width="28%"
        bgColor="white"
        height="85vh"
        overflowY="auto"
        zIndex={1}
        border="1px"
        borderColor="gray.200"
        boxShadow="2xl"
        opacity={0}
        initial="closed"
        animate={showFilter ? 'open' : 'closed'}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{ ease: 'easeInOut', duration: 0.3 }}
        variants={variants}
      >
        <Box pos="relative">
          <Box p={7}>
            <HStack
              justifyContent="space-between"
              borderBottom="1px"
              borderColor="gray.200"
              pb={7}
            >
              <Text fontWeight="semibold" fontSize="lg">
                Filters
              </Text>
              <Text color={'red.400'}>Clear All</Text>
            </HStack>
            <FormControl>
              <Box py="7" borderBottom="1px" borderColor="gray.200">
                <Text fontWeight="semibold" fontSize="lg">
                  Price Range
                </Text>
                <Text mb={4} fontSize="sm" color="blackAlpha.600">
                  The average nightly price is $133
                </Text>
                <HStack gap={1}>
                  <Box>
                    <FormLabel
                      fontSize="xs"
                      fontWeight="normal"
                      color="blackAlpha.600"
                    >
                      Min Price
                    </FormLabel>
                    <Input
                      borderRadius="xl"
                      defaultValue="$0"
                      size="lg"
                    ></Input>
                  </Box>
                  <Box>
                    <FormLabel
                      fontSize="xs"
                      fontWeight="normal"
                      color="blackAlpha.600"
                    >
                      Max Price
                    </FormLabel>
                    <Input
                      borderRadius="xl"
                      defaultValue="$500+"
                      size="lg"
                    ></Input>
                  </Box>
                </HStack>
              </Box>
              <Box py="7" borderBottom="1px" borderColor="gray.200">
                <Flex direction="column" gap={7}>
                  <Text fontWeight="semibold" fontSize="lg">
                    Type of place
                  </Text>
                  <Checkbox
                    size="lg"
                    alignItems="start"
                    spacing={3}
                    sx={{
                      '.chakra-checkbox__control': {
                        borderRadius: '3px',
                        borderWidth: 1,
                      },
                    }}
                  >
                    <Text lineHeight={1} mb={1}>
                      Entire Place
                    </Text>
                    <Text fontSize="sm" color="blackAlpha.600">
                      A place all to yourself
                    </Text>
                  </Checkbox>
                  <Checkbox
                    size="lg"
                    alignItems="start"
                    spacing={3}
                    sx={{
                      '.chakra-checkbox__control': {
                        borderRadius: '3px',
                        borderWidth: 1,
                      },
                    }}
                  >
                    <Text lineHeight={1} mb={1}>
                      Private room
                    </Text>
                    <Text fontSize="sm" color="blackAlpha.600">
                      Your own room in a home or a hotel, plus some shared
                      common spaces.
                    </Text>
                  </Checkbox>
                  <Checkbox
                    size="lg"
                    alignItems="start"
                    spacing={3}
                    sx={{
                      '.chakra-checkbox__control': {
                        borderRadius: '3px',
                        borderWidth: 1,
                      },
                    }}
                  >
                    <Text lineHeight={1} mb={1}>
                      Shared room
                    </Text>
                    <Text fontSize="sm" color="blackAlpha.600">
                      A sleeping space and common areas that may be shared with
                      others.
                    </Text>
                  </Checkbox>
                </Flex>
              </Box>
              <Box py="7" borderBottom="1px" borderColor="gray.200">
                <Text fontWeight="semibold" fontSize="lg" mb={6}>
                  Rooms, beds, and baths
                </Text>
                <Box mb={6}>
                  <FormLabel fontSize="sm" fontWeight="normal">
                    Bedrooms
                  </FormLabel>

                  <Stack direction="row">
                    <Button
                      variant="solid"
                      borderRadius="full"
                      bgColor="black"
                      color="white"
                      fontSize="sm"
                      height="9"
                      textAlign="center"
                      width="full"
                      _hover={{ bg: 'black' }}
                    >
                      Any
                    </Button>
                    {['1', '2', '3', '4', '5+'].map((x, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        borderRadius="full"
                        fontSize="sm"
                        height="9"
                        textAlign="center"
                        width="full"
                        colorScheme="black"
                      >
                        {x}
                      </Button>
                    ))}
                  </Stack>
                </Box>
                <Box mb={6}>
                  <FormLabel fontSize="sm" fontWeight="normal">
                    Beds
                  </FormLabel>
                  <Stack direction="row">
                    <Button
                      variant="solid"
                      borderRadius="full"
                      bgColor="black"
                      color="white"
                      fontSize="sm"
                      height="9"
                      textAlign="center"
                      width="full"
                      _hover={{ bg: 'black' }}
                    >
                      Any
                    </Button>
                    {['1', '2', '3', '4', '5+'].map((x, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        borderRadius="full"
                        fontSize="sm"
                        height="9"
                        textAlign="center"
                        width="full"
                        colorScheme="black"
                      >
                        {x}
                      </Button>
                    ))}
                  </Stack>
                </Box>
                <Box>
                  <FormLabel fontSize="sm" fontWeight="normal">
                    Bathrooms
                  </FormLabel>
                  <Stack direction="row">
                    <Button
                      variant="solid"
                      borderRadius="full"
                      bgColor="black"
                      color="white"
                      fontSize="sm"
                      height="9"
                      textAlign="center"
                      width="full"
                      _hover={{ bg: 'black' }}
                    >
                      Any
                    </Button>
                    {['1', '2', '3', '4', '5+'].map((x, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        borderRadius="full"
                        fontSize="sm"
                        height="9"
                        textAlign="center"
                        width="full"
                        colorScheme="black"
                      >
                        {x}
                      </Button>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </FormControl>
          </Box>
          <Box
            borderTop="1px"
            borderColor="gray.200"
            pos="sticky"
            bottom="0"
            left="0"
            width="full"
            bgColor="white"
            p={7}
            textAlign="center"
          >
            <Button
              disabled
              width="full"
              size="lg"
              bgColor="red.500"
              fontSize="sm"
              color="white"
              borderRadius="xl"
              _hover={{
                bgColor: 'red.700',
              }}
            >
              Show 836 Homes
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
