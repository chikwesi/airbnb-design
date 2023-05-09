import './App.css'
import { Header } from './component/Header'
import {
  MotionButton as Button,
  MotionBox as Box,
  MotionContainer as Container,
  MotionHeading as Heading,
  MotionText as Text,
  MotionImage as Image,
  MotionFlex as Flex,
  MotionHStack as HStack,
} from './component/framer'
import { ApartmentListGrid } from './component/List'
import { SideNav } from './component/SideNav'
import { MoreFilters, StickyFilter } from './component/Filter'
import { createContext, useLayoutEffect, useState } from 'react'
import { MoreDetails } from './component/Details'
import { ApartmentCardT } from './component/ApartmentCard'

export const ApartmentContext = createContext<{
  value: ApartmentCardT | null
  setValue: (value: ApartmentCardT | null) => void
  toggleDetail: (value: boolean) => void
}>({ value: null, setValue: () => null, toggleDetail: () => false })

function App() {
  const [showFilter, setShowFilter] = useState(false)
  const [detail, setDetail] = useState<ApartmentCardT | null>(null)
  const [showDetail, setShowDetail] = useState(false)

  useLayoutEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement
    if (showFilter || showDetail) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }, [showFilter, showDetail])

  const handleFilterToggle = (value: boolean) => {
    setShowFilter((v) => value)
  }


  const handleSetDetail = (detail: ApartmentCardT | null) => {
    setDetail(detail)
    setShowDetail(true)
  }

  return (
    <ApartmentContext.Provider
      value={{
        value: detail,
        setValue: handleSetDetail,
        toggleDetail: setShowDetail,
      }}
    >
      <Box position="relative" height={'full'}>
        <Header />
        <StickyFilter toggleFilter={handleFilterToggle} />
        <Flex position="relative">
          <SideNav py={3} borderRight="1px" borderColor="gray.200" />
          <ApartmentListGrid p={'7'} gap={'7'} mb={'5'} />
          <MoreFilters
            showFilter={showFilter}
            toggleFilter={handleFilterToggle}
          />
          <MoreDetails show={showDetail} />
        </Flex>
      </Box>
    </ApartmentContext.Provider>
  )
}

export default App
