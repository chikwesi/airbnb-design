import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Stack,
  Button,
  Text,
  Box,
  GridItem,
  Icon,
  Select,
  Heading,
  Link,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  Image,
  IconButton,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { CgClose, CgUserList } from 'react-icons/cg'
import { CiCalendar } from 'react-icons/ci'
import { FiHeart, FiShield, FiUpload } from 'react-icons/fi'
import { GrStar } from 'react-icons/gr'
import { IoBedOutline } from 'react-icons/io5'
import { MdOutlineHotel, MdOutlineShower } from 'react-icons/md'
import { ApartmentContext } from '../App'
import { MotionGrid as Grid } from './framer'
import {
  WorkspaceIcon,
  CheckInIcon,
  CancellationIcon,
  SuperHostIcon,
  RareGemIcon,
} from '../assets/icons'
import { reviews, reviewsPollData, services } from '../data/details'

const BookingForm = ({ cost, rating }: { cost: string; rating: string }) => {
  return (
    <FormControl
      border="1px"
      borderColor="gray.200"
      borderRadius="2xl"
      bgColor="blackAlpha.50"
      p={6}
      mb={5}
    >
      <HStack justifyContent="space-between">
        <Text>
          <Text as="span" fontSize="2xl" fontWeight="semibold">
            ${Number(cost).toLocaleString()}{' '}
          </Text>
          / night
        </Text>
        <HStack alignItems="center">
          <Icon as={GrStar} />
          <Text>{Number(rating).toFixed(2)}</Text>
        </HStack>
      </HStack>
      <Box py={5} borderBottom="1px" borderColor="gray.200">
        <HStack gap={2} mb={4}>
          <Box>
            <FormLabel fontSize="xs" fontWeight="normal" color="blackAlpha.600">
              Check In
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={CiCalendar} />}
                fontSize="xl"
              />
              <Input
                borderRadius="xl"
                color="black"
                variant="filled"
                bgColor="white"
                defaultValue="6/14/2023"
              ></Input>
            </InputGroup>
          </Box>
          <Box>
            <FormLabel fontSize="xs" fontWeight="normal" color="blackAlpha.600">
              Check Out
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={CiCalendar} />}
                fontSize="xl"
              />
              <Input
                borderRadius="xl"
                color="black"
                variant="filled"
                bgColor="white"
                defaultValue="6/21/2023"
              ></Input>
            </InputGroup>
          </Box>
        </HStack>
        <Box>
          <FormLabel
            color="blackAlpha.600"
            fontSize="xs"
            fontWeight="normal"
            w="full"
          >
            Guests
          </FormLabel>
          <Select
            bg="white"
            borderRadius="xl"
            placeholder="1 guest"
            size="md"
            variant="filled"
          />
        </Box>
      </Box>
      <Stack
        py={5}
        borderBottom="1px"
        borderColor="gray.200"
        direction="column"
        fontSize="sm"
      >
        <HStack justifyContent="space-between">
          <Text>6 nights</Text>
          <Text>$2,199</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Cleaning fee</Text>
          <Text>$85</Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text>Airbnb service fee</Text>
          <Text>$322</Text>
        </HStack>
      </Stack>
      <Box py={5} borderColor="gray.200" textAlign="left">
        <HStack justifyContent="space-between">
          <Text fontWeight="semibold">Total</Text>
          <Text>$2,606</Text>
        </HStack>
        <Text fontSize="xs" color="blackAlpha.600">
          Before taxes
        </Text>
      </Box>
      <Button
        width="full"
        size="lg"
        bgColor="red.400"
        fontSize="sm"
        color="white"
        borderRadius="xl"
        _hover={{
          bg: 'red.600',
        }}
      >
        Show 836 Homes
      </Button>
    </FormControl>
  )
}

const Reviews = () => {
  return (
    <Box py={9} fontSize="sm" borderBottom="1px" borderColor="gray.200">
      <HStack
        alignItems="center"
        color="black"
        justifyContent="space-between"
        mb={5}
      >
        <Heading as="h4" fontSize="lg" color="black">
          Reviews
        </Heading>
        <HStack alignItems="center">
          <Icon as={GrStar} />
          <Text>5.00 - 124 Reviews</Text>
        </HStack>
      </HStack>
      <Stack
        border="1px"
        borderColor="gray.200"
        borderRadius="2xl"
        direction="column"
        gap={5}
        p={6}
        mb={4}
      >
        {reviewsPollData.map(({ name, rating }, index) => (
          <HStack justifyContent="space-between" key={index}>
            <Text>{name}</Text>
            <HStack w="70%" gap={2}>
              <Slider
                aria-label="slider-ex-1"
                defaultValue={rating * 20}
                isDisabled={true}
              >
                <SliderTrack>
                  <SliderFilledTrack bg="red.600" height={'10'} />
                </SliderTrack>
              </Slider>
              <Text>{rating.toFixed(1)}</Text>
            </HStack>
          </HStack>
        ))}
      </Stack>
      <Grid gap={4} templateColumns="repeat(2, 1fr)" mb={7}>
        {reviews.map(({ name, img, comment }, index) => (
          <GridItem
            border="1px"
            borderColor="gray.200"
            borderRadius="2xl"
            key={index}
            p={5}
          >
            <HStack mb={4} gap="2">
              <Image
                height="14"
                objectFit="cover"
                src={img}
                width="14"
                borderRadius="full"
              />
              <Box>
                <Text fontSize="lg" fontWeight="medium">
                  {name}
                </Text>
                <Text fontSize="xs" color="blackAlpha.600">
                  March 2023
                </Text>
              </Box>
            </HStack>
            <Text>{comment}</Text>
          </GridItem>
        ))}
      </Grid>
      <Link color="red">View more</Link>
    </Box>
  )
}

const Host = () => {
  return (
    <Box pt={9} fontSize="sm" color="blackAlpha.800">
      <Heading as="h4" fontSize="lg" mb={4} color="black">
        Host
      </Heading>
      <Flex alignItems="center" gap="4" mb={4} width="full">
        <Image
          height={'14'}
          objectFit="cover"
          src="/host.webp"
          width={'14'}
          borderRadius="full"
        />
        <Box>
          <Text fontSize="md" fontWeight="medium">
            Hosted by Brenda
          </Text>
          <Text fontSize="xs" color="blackAlpha.600">
            Joined in August 2014
          </Text>
        </Box>
        <Button
          borderColor="black"
          borderRadius="xl"
          variant="outline"
          fontSize="sm"
          size="lg"
          sx={{ marginLeft: 'auto' }}
        >
          Contact Host
        </Button>
      </Flex>
      <HStack fontSize="md" gap={5} py={5}>
        <HStack alignItems="center">
          <Icon fontSize="xl" as={GrStar} />
          <Text>2,635 reviews</Text>
        </HStack>
        <HStack alignItems="center">
          <Icon as={FiShield} fontSize="xl" />
          <Text>Identity verified</Text>
        </HStack>
        <HStack alignItems="center">
          <Icon as={SuperHostIcon} fontSize="xl" color="red.400" />
          <Text>Superhost</Text>
        </HStack>
      </HStack>
      <Text mb={5}>
        As a mother of 4, living in Solana Beach for 25+ years, I love to help
        families enjoy our beautiful area. Vacations are special and we do our
        very best to make them affordable, enjoy…
      </Text>
      <Link color="red">View more</Link>
    </Box>
  )
}

const Address = () => {
  return (
    <Box
      py={9}
      fontSize="sm"
      color="blackAlpha.700"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Heading as="h4" fontSize="lg" mb={4} color="black">
        Where you'll be
      </Heading>
      {/* TODO: Put google map */}
      <Heading as="h4" fontSize="md" mb={4} color="black" fontWeight="medium">
        {/* TODO: Make dynamic */}
        Aspen, Colorado, United States
      </Heading>
      <Text mb={5}>
        The property, given its close proximity to the refreshing hillside town
        of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape
        from the hustle and bustle of city life.
      </Text>
      <Link color="red">View more</Link>
    </Box>
  )
}

export const MoreDetails = ({ show }: { show: boolean }) => {
  const { value, setValue, toggleDetail } = useContext(ApartmentContext)
  const parentVariants = {
    open: {
      opacity: '1',
      zIndex: 2,
      // transition: {
      //   ease: 'easeIn',
      //   duration: 0,
      //   when: 'beforeChildren',
      // },
    },
    closed: {
      opacity: '0',
      zIndex: -1,
      transition: {
        delay: 0.5,
        // when: 'afterChildren',
      },
    },
  }
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: '100%' },
  }
  return (
    <Grid
      bg="blackAlpha.600"
      gap={5}
      height="100vh"
      left={0}
      overflowX="auto"
      position="fixed"
      templateColumns="1fr 75%"
      top={0}
      width="100%"
      zIndex={2}
      initial="closed"
      animate={show ? 'open' : 'closed'}
      variants={parentVariants}
    >
      <IconButton
        aria-label={''}
        borderRadius="full"
        bg="white"
        icon={<Icon as={CgClose} />}
        justifySelf="end"
        mt={5}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        variants={variants}
        onClick={() => toggleDetail(false)}
        _hover={{
          bg: 'black',
          color: 'white',
          outline: 'none',
          border: 'none',
          transition: '1s easein',
        }}
      ></IconButton>
      <Grid
        border="1px"
        borderColor="gray.200"
        bgColor="white"
        gap={7}
        overflowX="auto"
        p={7}
        height="100%"
        templateColumns="7fr 4fr"
        templateRows="repeat(2, 1fr)"
        // @ts-ignore no problem in operation, although type error appears.
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        variants={variants}
      >
        <Grid
          gap={4}
          gridColumn="1/3"
          h="60vh"
          templateRows="repeat(2, 1fr)"
          templateColumns="5fr 3fr"
        >
          <GridItem
            rowSpan={2}
            colSpan={1}
            borderRadius="2xl"
            overflow="hidden"
            bg={'blackAlpha.500'}
          >
            <Image
              height="100%"
              width="100%"
              objectFit="cover"
              src={value?.pImage}
            />
          </GridItem>
          <GridItem borderRadius="2xl" bg={'blackAlpha.500'} overflow="hidden">
            <Image
              height="100%"
              width="100%"
              objectFit="cover"
              src={value?.sImage}
            />
          </GridItem>
          <GridItem borderRadius="2xl" bg={'blackAlpha.500'} overflow="hidden">
            <Image
              height="100%"
              width="100%"
              objectFit="cover"
              src={value?.tImage}
            />
          </GridItem>
        </Grid>
        <Box>
          <Button borderRadius="xl" variant="outline" fontWeight="light">
            <Icon as={SuperHostIcon} />{' '}
            <Text as="span" ms={2}>
              Superhost
            </Text>
          </Button>
          <Box
            borderBottom="1px"
            borderColor="gray.200"
            color="blackAlpha.800"
            pb={5}
            pt={3}
          >
            <Flex
              alignItems="center"
              gap="4"
              justifyContent="space-between"
              mb={2}
              width="full"
            >
              <Heading as="h2" fontWeight="medium" fontSize="3xl" width="80%">
                {value?.name}
              </Heading>
              <Box width="20%">
                <IconButton
                  aria-label={''}
                  bg="blackAlpha.200"
                  borderRadius="full"
                  me="2"
                  icon={<Icon as={FiUpload} />}
                  _hover={{
                    bg: 'black',
                    color: 'white',
                    outline: 'none',
                    border: 'none',
                    transition: '1s easein',
                  }}
                ></IconButton>
                <IconButton
                  aria-label={''}
                  bg="blackAlpha.200"
                  borderRadius="full"
                  icon={<Icon as={FiHeart} />}
                  _hover={{
                    bg: 'black',
                    color: 'white',
                    outline: 'none',
                    border: 'none',
                    transition: '1s easein',
                  }}
                ></IconButton>
              </Box>
            </Flex>
            <Text color="blackAlpha.600">{value?.location}</Text>

            <HStack fontSize="md" gap={5} py={5}>
              <HStack alignItems="center">
                <Icon fontSize="xl" as={CgUserList} />
                <Text>6 guests</Text>
              </HStack>
              <HStack alignItems="center">
                <Icon as={MdOutlineHotel} fontSize="xl" />
                <Text>3 bedrooms</Text>
              </HStack>
              <HStack alignItems="center">
                <Icon as={IoBedOutline} fontSize="xl" />
                <Text>3 beds</Text>
              </HStack>
              <HStack alignItems="center">
                <Icon as={MdOutlineShower} fontSize="xl" />
                <Text>2 baths</Text>
              </HStack>
            </HStack>
          </Box>
          <Box
            py={9}
            borderBottom="1px"
            borderColor="gray.200"
            fontSize="sm"
            color="blackAlpha.600"
          >
            <HStack alignItems="start" gap={5}>
              <Box w="full">
                {/* TODO: Set Icon */}
                <Icon as={WorkspaceIcon} />
                <Heading
                  as="h4"
                  fontSize="md"
                  my={3}
                  color="black"
                  fontWeight="medium"
                >
                  Dedicated workspace
                </Heading>
                <Text mb={5}>
                  A private room with wifi that's well-suited for working
                </Text>
              </Box>
              <Box w="full">
                {/* TODO: Set Icon */}
                <Icon as={CheckInIcon} mb={3} />
                <Heading
                  as="h4"
                  fontSize="md"
                  my={3}
                  color="black"
                  fontWeight="medium"
                >
                  Self check-in
                </Heading>
                <Text mb={5}>Check yourself in with the keypad</Text>
              </Box>
              <Box w="full">
                {/* TODO: Set Icon */}
                <Icon as={CancellationIcon} mb={3} />
                <Heading
                  as="h4"
                  fontSize="md"
                  my={3}
                  color="black"
                  fontWeight="medium"
                >
                  Free cancellation before Jul 25
                </Heading>
                <Text mb={3}>
                  A private room with wifi that's well-suited for working
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box
            py={9}
            fontSize="sm"
            color="blackAlpha.700"
            borderBottom="1px"
            borderColor="gray.200"
          >
            <Heading as="h4" fontSize="lg" mb={4} color="black">
              About this space
            </Heading>
            <Text mb={5}>
              Enjoy a quiet getaway in this charming cottage renovated,
              designed, and owned by Chip and Joanna Gaines. Originally the
              carriage house for Hillcrest Estate, this home includes one
              bedroom, one bath, an office nook and a private back patio. This
              makes it the perfect getaway for a party of two, or if you're
              stopping through town and need a restful place to retreat.
            </Text>
            <Heading
              as="h4"
              fontSize="md"
              mb={4}
              color="black"
              fontWeight="medium"
            >
              The space
            </Heading>
            <Text mb={5}>
              An open living, dining, and kitchen area provide ample room in
              this cozy cottage. French double doors lead you out to the back
              patio to enjoy your own private outdoor space. A dedicated,
              covered parking spot for your use. The parking lot is shared with
              Hillcrest Estate guests.
            </Text>
            <Link color="red">Read more</Link>
          </Box>
          <Box
            py={9}
            color="blackAlpha.700"
            borderBottom="1px"
            borderColor="gray.200"
          >
            <Heading as="h4" fontSize="lg" color="black">
              What this place offers
            </Heading>
            <Grid
              templateColumns="repeat(3, 1fr)"
              columnGap={8}
              rowGap={7}
              py={7}
              pr={7}
            >
              {services.map(({ icon, name }, i) => (
                <HStack key={i} alignItems="center">
                  <Icon as={icon} fontSize="2xl" />
                  <Text fontSize="smaller" lineHeight={1.2}>
                    {name}
                  </Text>
                </HStack>
              ))}
            </Grid>

            <Link color="red">View more</Link>
          </Box>
          <Reviews />
          <Address />
          <Host />
        </Box>

        <Box alignSelf="flex-start" pos="sticky" top={2}>
          <BookingForm
            cost={String(value?.cost)}
            rating={String(value?.rating)}
          />
          <HStack
            alignItems="start"
            border="1px"
            borderColor="pink.100"
            borderRadius="2xl"
            bgColor="red.50"
            gap={4}
            p={6}
          >
            <Icon as={RareGemIcon} />
            <Box>
              <Text fontWeight="semibold">This is a rare find</Text>
              <Text fontSize="sm" color="blackAlpha.600">
                Kathryn's place on Airbnb is usually fully booked.
              </Text>
            </Box>
          </HStack>
        </Box>
      </Grid>
    </Grid>
  )
}
