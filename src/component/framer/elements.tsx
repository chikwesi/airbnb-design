import {
  Accordion,
  AccordionButton,
  AccordionButtonProps,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
  AccordionPanelProps,
  AccordionProps,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Container,
  ContainerProps,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  HStack,
  IconButton,
  IconButtonProps,
  Image,
  ImageProps,
  StackProps,
  Text,
  TextProps,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const MotionButton = motion<ButtonProps>(Button)
export const MotionBox = motion<BoxProps>(Box)
export const MotionContainer = motion<ContainerProps>(Container)
export const MotionHeading = motion<HeadingProps>(Heading)
export const MotionText = motion<TextProps>(Text)
export const MotionImage = motion<ImageProps>(Image)
export const MotionFlex = motion<FlexProps>(Flex)
export const MotionVStack = motion<StackProps>(VStack)
export const MotionHStack = motion<StackProps>(HStack)
export const MotionAccordion = motion<AccordionProps>(Accordion)
export const MotionAccordionButton = motion<AccordionButtonProps>(AccordionButton)
export const MotionAccordionItem = motion<AccordionItemProps>(AccordionItem)
export const MotionAccordionPanel = motion<AccordionPanelProps>(AccordionPanel)
export const MotionIconButton = motion<IconButtonProps>(IconButton)