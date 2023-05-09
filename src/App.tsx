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
  const [scrollPos, setScrollPos] = useState('')

  useLayoutEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement
    const scrollY = `${window.scrollY}px`
    console.log(scrollPos)
    if (showFilter || showDetail) {
      body.style.position = 'fixed'
      setScrollPos(scrollY)
      body.style.top = `-${scrollY}`
    } else {
      body.style.position = 'static'
      body.style.top = `-${scrollPos}`
    }
  }, [showFilter, showDetail])

  const handleFilterToggle = () => {
    setShowFilter((toggle) => !toggle)
  }

  const handleSetDetail = (detail: ApartmentCardT | null) => {
    setDetail(detail)
    setShowDetail(true)
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
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
          <MoreFilters showFilter={showFilter} />
          <MoreDetails show={showDetail} />
        </Flex>
      </Box>
    </ApartmentContext.Provider>
  )
}

export default App
