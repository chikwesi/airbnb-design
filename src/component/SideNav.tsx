import {
  Icon,
  List,
  ListItem,
  ChakraStyledOptions,
  chakra,
} from '@chakra-ui/react'

import {
  MotionVStack as VStack,
  MotionText as Text,
  MotionFlex as Flex,
} from './framer'

import {
  AirbnbIcon,
  BeachFrontIcon,
  CampingIcon,
  CastlesIcon,
  DesertIcon,
  FarmsIcon,
  HomesIcon,
  IslandsIcon,
  KitchenIcon,
  LuxeIcon,
  MansionIcon,
  PoolsIcon,
  SkiingIcon,
  SurfingIcon,
  TreehouseIcon,
  ViewsIcon,
  VineyardsIcon,
} from '../assets/icons'

interface NavOptions {
  name: string
  icon: () => JSX.Element
}

const options: NavOptions[] = [
  { name: 'All Homes', icon: AirbnbIcon },
  { name: 'Amazing Views', icon: ViewsIcon },
  { name: 'Tiny Homes', icon: HomesIcon },
  { name: 'Chefs Kitchen', icon: KitchenIcon },
  { name: 'Surfing', icon: SurfingIcon },
  { name: 'Mansions', icon: MansionIcon },
  { name: 'Luxe', icon: LuxeIcon },
  { name: 'Treehouses', icon: TreehouseIcon },
  { name: 'Camping', icon: CampingIcon },
  { name: 'Beachfront', icon: BeachFrontIcon },
  { name: 'Farms', icon: FarmsIcon },
  { name: 'Castles', icon: CastlesIcon },
  { name: 'Vineyards', icon: VineyardsIcon },
  { name: 'Islands', icon: IslandsIcon },
  { name: 'Amazing Pools', icon: PoolsIcon },
  { name: 'Skiing', icon: SkiingIcon },
  { name: 'Desert', icon: DesertIcon },
]
export const Nav = (props: ChakraStyledOptions) => {
  const textVariants = {
    open: {
      display: 'block',
    },
    closed: {
      display: 'none',
    },
  }
  const variants = {
    open: {
      opacity: 1,
      minWidth: '180px',
      backgroud: '#000',
      transition: { ease: 'easeInOut', duration: 0.2, when: 'beforeChildren' },
    },
    closed: {
      minWidth: '25px',
    },
  }

  const parentVariant = {
    open: {
     // transition: { ease: 'easeInOut', when: 'beforeChildren' },
    },
    closed: {
      //transition: { ease: 'easeInOut', when: 'afterChildren' },
    },
  }

  return (
    <VStack
      {...props}
      initial="closed"
      whileHover="open"
      variants={parentVariant}
      role="group"
    >
      <List>
        {options.map(({ name, icon }, i) => (
          <ListItem
            key={i}
            px={7}
            py={4}
            borderRight={i == 0 ? '4px' : 0}
            borderColor="red.600"
           _hover={{ bg: 'blackAlpha.200' }}
          >
            <Flex
              gap={2}
              alignItems="center"
              fontSize={'sm'}
              variants={variants}
              whiteSpace={'nowrap'}
            >
              <Icon as={icon}></Icon>
              <Text
                variants={textVariants}
                //_groupHover={{ display: 'inline-block' }}
              >
                {name}
              </Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </VStack>
  )
}

export const SideNav = chakra(Nav)
