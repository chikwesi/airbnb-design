import {
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { GrStar } from 'react-icons/gr'
import { FiHeart } from 'react-icons/fi'
import { useContext } from 'react'
import { ApartmentContext } from '../App'

export type ApartmentCardT = {
  pImage: string
  sImage: string
  tImage: string
  name: string
  location: string
  cost: string
  rating: string
  [name: string]: any
}

export const ApartmentCard = (prop: ApartmentCardT) => {
  const { value, setValue } = useContext(ApartmentContext)
  const { pImage: img, name, cost, rating, location, ...rest } = prop
  return (
    <Flex
      borderRadius={'3xl'}
      border="1px"
      direction="column"
      borderColor={'gray.200'}
      gap={0}
      overflow={'hidden'}
      pos="relative"
      minW={'full'}
      width="full"
      onClick={() => setValue(prop)}
      _hover={{
        cursor: 'pointer',
        boxShadow: 'xl'
      }}

    >
      {/* TODO: Add transition on hover */}
      <IconButton
        pos="absolute"
        borderRadius="full"
        bg="white"
        right="2"
        top="2"
        icon={<Icon as={FiHeart} />}
        aria-label={''}
        _hover={{
          bg: 'black',
          color: 'white',
          outline: 'none',
          border: 'none',
          transition: '1s easein',
        }}
      ></IconButton>
      <Image
        height="200px"
        width="100%"
        objectFit="cover"
        objectPosition="center"
        src={img}
      ></Image>
      <Flex
        p="1rem"
        width="full"
        fontSize="sm"
        lineHeight="6"
        direction="column"
        flexGrow={1}
      >
        <Heading fontSize={'lg'} as="h4" fontWeight="medium" mb={2}>
          {name}
        </Heading>
        <Text color="blackAlpha.700" mb="7">
          {location}
        </Text>
        <Flex justifyContent="space-between" width="full" mt="auto">
          <Text>${Number(cost).toLocaleString()} / night</Text>
          <HStack alignItems="center">
            <Icon as={GrStar} />
            <Text>{Number(rating).toFixed(2)}</Text>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}
