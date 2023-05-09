import { chakra, ChakraStyledOptions, Grid, list } from '@chakra-ui/react'
import { APPARTMENT_LISTINGS } from '../data/mocks'
import { ApartmentCard } from './ApartmentCard'

const ApartmentList = (props: ChakraStyledOptions) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
      {...props}
    >
      {APPARTMENT_LISTINGS.map((product, x) => (
        <ApartmentCard {...product} key={x}></ApartmentCard>
      ))}
    </Grid>
  )
}

export const ApartmentListGrid = chakra(ApartmentList)
