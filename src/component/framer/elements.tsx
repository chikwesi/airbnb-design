import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Container,
  ContainerProps,
  Flex,
  FlexProps,
  Grid,
  GridProps,
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
export const MotionGrid = motion<GridProps>(Grid)
export const MotionIconButton = motion<IconButtonProps>(IconButton)
