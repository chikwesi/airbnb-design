import {
  Text,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
} from '@chakra-ui/react'

const variant = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
}

function Navigation() {
  return (
    <Grid
      as={'nav'}
      templateColumns={'repeat(3, 1fr)'}
      alignItems={'center'}
      justifyContent={'space-between'}
      height="100%"
    >
      <Image src="/logo.svg" width="28" />
      <Flex
        height="100%"
        gap={'10'}
        alignItems="center"
        justifyContent="center"
      >
        <Flex pos="relative" height={'100%'} alignItems="center">
          <Text
            fontWeight={'bold'}
            _after={{
              content: "''",
              display: 'block',
              width: '100%',
              borderBottom: '4px',
              borderColor: 'red.400',
              bottom: 0,
              position: 'absolute',
            }}
          >
            Stays
          </Text>
        </Flex>
        <Text>Experiences</Text>
        <Text>Online Experiences</Text>
      </Flex>

      <GridItem justifySelf={'end'}>
        <Image borderRadius="full" src="/avatar1.webp" width="10" />
      </GridItem>
    </Grid>
  )
}

export const Header = () => {
  return (
    <Container
      minW={'100%'}
      pos={'relative'}
      as={'header'}
      borderBottom="1px"
      borderColor={'gray.200'}
      height="8vh"
      px={7}
    >
      <Navigation />
    </Container>
  )
}

export default Navigation
