import './App.css'
import Header from './component/Header'
import { AccordionIcon, Icon, IconButton, VStack } from '@chakra-ui/react'
import {
  MotionButton as Button,
  MotionBox as Box,
  MotionContainer as Container,
  MotionHeading as Heading,
  MotionText as Text,
  MotionImage as Image,
  MotionFlex as Flex,
  MotionAccordion as Accordion,
  MotionAccordionButton as AccordionButton,
  MotionAccordionItem as AccordionItem,
  MotionAccordionPanel as AccordionPanel,
  MotionHStack as HStack,
} from './component/framer'
import ProductCard from './component/ProductCard'
import Footer from './component/Footer'
import {
  ESSENTIAL_PRODUCTS,
  PRODUCT_IMAGES,
  PRODUCT_METRICS,
} from './data/constants'
import ProductMetric from './component/ProductMetric'
import {
  BsArrowRight,
  BsCaretRightFill,
  BsInstagram,
  BsSquare,
  BsSquareFill,
} from 'react-icons/bs'
import { FaArrowDown, FaLongArrowAltDown, FaQuoteLeft } from 'react-icons/fa'
import {
  ExpandWidthVariant,
  FadeInVariant,
  RotateVariant,
  ScaleDownImageVariant,
  ScaleUpVariant,
  SlideDiagRightItemVariant,
  SlideInLeftFeedBackVariant,
  SlideInLeftItemVariant,
  SlideInLeftVariant,
  SlideUpItemVariant,
  SlideUpVariant,
} from './framer-variants'
import ExploreComponent from './component/exporeProduct'

function App() {
  return (
    <Box bgColor={'blackAlpha.50'} overflow={'hidden'}>
      <Container maxW={'container.lg'} py={'5'} pos={'relative'}>
        <Header></Header>
      </Container>
      <Container maxW={'container.lg'} position={'relative'}>
        <Box
          position={'absolute'}
          blendMode={'multiply'}
          left={0}
          top={0}
          zIndex={0}
          boxSize={'full'}
          variants={SlideUpVariant}
          initial="hidden"
          animate="show"
        >
          <Image
            boxSize={'full'}
            objectFit={'contain'}
            objectPosition={'bottom right'}
            variants={SlideUpItemVariant}
            src="https://img.freepik.com/free-photo/skincare-makeup-concept-beautiful-asian-female-woman-with-healthy-facial-skin-close-up-portrait-studio-shot_609648-832.jpg?w=2000&t=st=1670579661~exp=1670580261~hmac=24407469cf8db8dcad5b2e1c0b88c412a8208741bc17171c3b0dd4a9fbe13a2e"
          />
        </Box>
        <Box py={'32'} position={'relative'} zIndex={1}>
          <Box variants={SlideUpVariant} initial="hidden" animate="show">
            <Heading
              mb={'10'}
              as={'h1'}
              size={'4xl'}
              fontWeight={'normal'}
              variants={SlideUpItemVariant}
            >
              Let your skin
              <br /> Going
              <Image
                height={'10'}
                borderRadius={'full'}
                display={'inline-block'}
                outline={'1px solid'}
                outlineColor={'white'}
                outlineOffset={'-4px'}
                mx={'3'}
                src="https://images.unsplash.com/photo-1586212653598-40f9046fe5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              Out.
            </Heading>
            <Text variants={SlideUpItemVariant}>
              We want to bring to the world throught our <br /> products that
              very special feeling joy, healthy and <br />
              positive energy.
            </Text>
            <Box mt={'10'}>
              <Button
                variants={SlideUpItemVariant}
                borderRadius={'full'}
                rightIcon={<BsArrowRight />}
                colorScheme={'orange'}
              >
                Shop Now
              </Button>{' '}
              <Button
                variants={SlideUpItemVariant}
                variant={'ghost'}
                leftIcon={<BsCaretRightFill />}
              >
                How to use
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* Start Product Info */}
      <Box
        position={'relative'}
        py={'0'}
        display={'flex'}
        justifyContent={'flex-end'}
      >
        <Box
          width={'65%'}
          bgColor={'lavender'}
          top={'0'}
          position={'absolute'}
          zIndex={'0'}
          height={'100%'}
        ></Box>
        <Container maxW={'container.lg'} zIndex={'1'} position={'relative'}>
          <Box
            width={'20%'}
            pos={'absolute'}
            right={0}
            top={'-10%'}
            border={'2px'}
            borderColor={'white'}
          >
            <Box
              pos={'absolute'}
              padding={'10'}
              top={'-50'}
              left={'-50'}
              background={'white'}
              variants={RotateVariant}
              animate="show"
              width={'50%'}
              paddingTop="30%"
              _before={{
                content: '""',
                display: 'block',
                position: 'absolute',
                height: '98%',
                width: '98%',
                top: '1%',
                left: '1%',
                backgroundColor: 'orange.400',
                clipPath:
                  'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
              clipPath={
                'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              }
            ></Box>
            <Text
              pos={'absolute'}
              fontSize={'xs'}
              color={'white'}
              top={'-2'}
              left={'-3'}
              transform="rotate(320deg)"
              zIndex={'1'}
            >
              New
            </Text>
            <Image
              src="https://images.unsplash.com/photo-1586212653598-40f9046fe5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              variants={ScaleDownImageVariant}
            />
          </Box>
          <Flex gap={'20'} alignItems={'center'} py={'32'}>
            <Box minW={'40%'} maxW={'40%'} pos={'relative'}>
              <Box
                pos={'absolute'}
                zIndex={1}
                bgColor={'#ffffff70'}
                border={'1px'}
                borderColor={"white"}
                right={0}
                top={0}
                borderRadius={'full'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                backdropFilter="blur(4px)"
                color={"purple.600"}
                width={'27%'}
                padding={1}
                _before={{ content: '""', paddingTop: '100%', float: 'left' }}
              >
                <ExploreComponent/>
                <Icon color={'orange.400'} as={FaLongArrowAltDown} position={'absolute'}></Icon>
              </Box>

              <Box width={'100%'}>
                <Box
                  overflow={'hidden'}
                  variants={ScaleUpVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  borderTopRadius={'full'}
                  boxSize={'full'}
                  pos={'relative'}
                  py={'65%'}
                >
                  <Image
                    pos={'absolute'}
                    left={0}
                    top={0}
                    variants={ScaleDownImageVariant}
                    src="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  ></Image>
                </Box>
              </Box>
            </Box>
            <Box
              variants={SlideUpVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-25%' }}
            >
              <Heading
                variants={SlideUpItemVariant}
                fontWeight={'normal'}
                size={'2xl'}
              >
                The self care brand that's setting a new{' '}
                <Text as={'span'} color={'orange.400'}>
                  standard Clean
                </Text>{' '}
                products.
              </Heading>
              <HStack mt={'10'} gap={'10'}>
                <Box variants={SlideUpItemVariant}>
                  <Text fontWeight={'medium'} mb={'5'}>
                    Where are products made?
                  </Text>
                  <Text fontSize={'smaller'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus amet aliquid unde minima optio
                  </Text>
                </Box>
                <Box variants={SlideUpItemVariant}>
                  <Text fontWeight={'medium'} mb={'5'}>
                    Where are products made?
                  </Text>
                  <Text fontSize={'smaller'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus amet aliquid unde minima optio
                  </Text>
                </Box>
              </HStack>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Products */}
      <Container
        maxW={'container.lg'}
        py={'32'}
        variants={SlideInLeftVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50%' }}
      >
        <Flex gap={'10'} mb={'5'}>
          <Box width={'100%'} variants={SlideUpItemVariant}>
            <Heading
              as={'h2'}
              fontWeight={'normal'}
              lineHeight={'1.2'}
              size={'2xl'}
            >
              Trending On{' '}
              <Text as={'span'} color={'orange.500'}>
                Essentials
              </Text>{' '}
            </Heading>
            <Text mt={'5'}>
              oluptatum reprehenderit ratione fuga blanditiis enim. Inventore
              harum quas deleniti
            </Text>
            <Button
              mt={'5'}
              variant={'outline'}
              borderRadius={'full'}
              color="orange.500"
              borderColor={'orange.500'}
              rightIcon={<BsArrowRight />}
            >
              Browse All Products
            </Button>
          </Box>
          {ESSENTIAL_PRODUCTS.slice(0, 2).map((product, x) => (
            <ProductCard
              {...product}
              key={x}
              variants={SlideInLeftItemVariant}
            ></ProductCard>
          ))}
        </Flex>
        <Flex gap={'10'}>
          {ESSENTIAL_PRODUCTS.slice(2, 5).map((product, x) => (
            <ProductCard
              variants={SlideInLeftItemVariant}
              {...product}
              key={x}
            ></ProductCard>
          ))}
        </Flex>
      </Container>

      {/* Start Product Metrics */}
      <Box position={'relative'}>
        <Box
          width={'50%'}
          bgColor={'red.100'}
          top={'0'}
          position={'absolute'}
          zIndex={'0'}
          height={'100%'}
        ></Box>
        <Container maxW={'container.lg'} zIndex={'1'} position={'relative'}>
          <Flex gap={'20'} alignItems={'center'} py={'20'} pos={'relative'}>
            <Box
              minW={'84%'}
              position={'absolute'}
              height={'full'}
              top={0}
              left={0}
              bgColor={'red.100'}
              zIndex={-1}
            ></Box>
            <Box
              variants={SlideUpVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-25%' }}
            >
              <Heading
                variants={SlideUpItemVariant}
                mb={'5'}
                size={'3xl'}
                fontWeight={'normal'}
              >
                We make going all natural{' '}
                <Text color={'orange.500'} as="span">
                  Beauty
                </Text>
                .
              </Heading>
              <Text variants={SlideUpItemVariant} mb={'10'}>
                Made with nature's best ingredients - our products' transparent
                ingredient lists allow you to know.
              </Text>
              <Flex gap={'8'} wrap={'wrap'}>
                {PRODUCT_METRICS.map((metric, i) => (
                  <ProductMetric
                    variants={SlideDiagRightItemVariant}
                    key={i}
                    {...metric}
                  ></ProductMetric>
                ))}
              </Flex>
            </Box>
            <Box minW={'33%'} maxW={'33%'}>
              <Box
                borderRadius={'full'}
                width={'100%'}
                py={'80%'}
                pos={'relative'}
                overflow={'hidden'}
                variants={ScaleUpVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Image
                  pos={'absolute'}
                  left={0}
                  top={0}
                  variants={ScaleDownImageVariant}
                  height={'100%'}
                  maxH={'none'}
                  src="https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80"
                ></Image>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Start  QA section */}
      <Container maxW={'container.lg'} py={'40'}>
        <Flex gap={'32'} alignItems={'center'}>
          <Box width={'100%'}>
            <Box
              borderTopRadius={'full'}
              width={'100%'}
              py={'65%'}
              pos={'relative'}
              overflow={'hidden'}
              variants={ScaleUpVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image
                pos={'absolute'}
                left={0}
                top={0}
                variants={ScaleDownImageVariant}
                src="https://images.unsplash.com/photo-1623607165789-53d1349c11d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
              />
            </Box>
          </Box>
          <Box
            width={'100%'}
            variants={SlideUpVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Heading
              mb={'10'}
              fontWeight={'normal'}
              size={'2xl'}
              variants={SlideUpItemVariant}
            >
              You have{' '}
              <Text as={'span'} color={'orange.400'}>
                questions,{' '}
              </Text>
              we have answers
            </Heading>
            <Accordion defaultIndex={[0]}>
              <AccordionItem variants={SlideUpItemVariant}>
                <AccordionButton ps={'0'} py={'5'}>
                  <Box flex="1" textAlign="left">
                    Where are products made
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={'5'} ps={'0'} variants={SlideUpItemVariant}>
                  Many brands , especially in period care, carry products that
                  take centuries to biodegrade with pronounce.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem variants={SlideUpItemVariant}>
                <AccordionButton ps={'0'} py={'5'}>
                  <Box flex="1" textAlign="left">
                    Where are products made
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={'5'} ps={'0'} variants={SlideUpItemVariant}>
                  Many brands , especially in period care, carry products that
                  take centuries to biodegrade with pronounce.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem variants={SlideUpItemVariant}>
                <AccordionButton ps={'0'} py={'5'}>
                  <Box flex="1" textAlign="left">
                    Where are products made
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={'5'} ps={'0'} variants={SlideUpItemVariant}>
                  Many brands , especially in period care, carry products that
                  take centuries to biodegrade with pronounce.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Container>

      {/* Feedback */}
      <Container
        maxW={'container.lg'}
        pos={'relative'}
        initial="hidden"
        whileInView="show"
        variants={FadeInVariant}
        viewport={{ once: true, margin: '-25%' }}
      >
        <Box
          width={'80%'}
          top={'0'}
          position={'absolute'}
          zIndex={'0'}
          height={'100%'}
          display={'flex'}
          justifyContent={'flex-end'}
        >
          <Box
            boxSize={'full'}
            bgColor={'white'}
            initial="hidden"
            whileInView="show"
            variants={ExpandWidthVariant}
            viewport={{ once: true, margin: '-25%' }}
          ></Box>
        </Box>
        <Box
          p={10}
          pe={0}
          variants={SlideInLeftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-25%' }}
        >
          <HStack position={'relative'} zIndex={'1'} gap={'10'}>
            <Box>
              <Box variants={ScaleUpVariant}>
                <Icon
                  color={'orange.500'}
                  fontSize={'4xl'}
                  mb={'10'}
                  as={FaQuoteLeft}
                />
              </Box>

              <Text
                fontSize={'xl'}
                mb={'5'}
                variants={SlideInLeftFeedBackVariant}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                error aliquid officia amet aut, pariatur saepe impedit nesciunt
              </Text>
              <Text fontWeight={'bold'} variants={SlideInLeftFeedBackVariant}>
                Jane Cooper
              </Text>
              <Text fontSize={'xs'} variants={SlideInLeftFeedBackVariant}>
                Naperville, USA
              </Text>
            </Box>
            <Box minW={'30%'} position={'relative'}>
              <Box
                pos={'relative'}
                pt={'100%'}
                borderRadius={'full'}
                overflow={'hidden'}
                borderColor={'gray.100 !important'}
                border={'8px'}
                initial="hidden"
                whileInView="show"
                variants={ScaleUpVariant}
                viewport={{ once: true, margin: '-10%' }}
              >
                <Image
                  objectFit="cover"
                  position={'absolute'}
                  width={'100%'}
                  height={'100%'}
                  left={0}
                  top={0}
                  alt={'model with hand on her jaw'}
                  variants={ScaleDownImageVariant}
                  src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2395&q=80"
                />
              </Box>
            </Box>
          </HStack>
          <HStack
            justifyContent={'center'}
            position={'relative'}
            zIndex={1}
            variants={SlideInLeftFeedBackVariant}
          >
            <Icon color={'orange.400'} as={BsSquare}></Icon>
            <Icon color={'orange.400'} as={BsSquareFill}></Icon>
            <Icon color={'orange.400'} as={BsSquare}></Icon>
          </HStack>
        </Box>
      </Container>

      {/* Partners */}
      <Container maxW={'container.lg'} py={'32'} mb={10}>
        <Flex
          justifyContent={'space-between'}
          alignItems={'baseline'}
          gap={'20'}
          variants={SlideInLeftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-25%' }}
        >
          <Box maxW={'20%'} variants={SlideInLeftItemVariant}>
            <Image src="/calvin-klein.png" />
          </Box>
          <Box maxW={'20%'} variants={SlideInLeftItemVariant}>
            <Image src="/mary-kay.png" />
          </Box>
          <Box maxW={'20%'} variants={SlideInLeftItemVariant}>
            <Image src="/prada.png" />
          </Box>
          <Box maxW={'20%'} variants={SlideInLeftItemVariant}>
            <Image src="/versace.png" />
          </Box>
          <Box maxW={'20%'} variants={SlideInLeftItemVariant}>
            <Image src="/christian-dior.png" />
          </Box>
        </Flex>
      </Container>

      {/* socials */}
      <Container maxW={'container.lg'} mb={'-16'}>
        <Flex
          gap={'10'}
          variants={SlideInLeftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-25%' }}
        >
          {PRODUCT_IMAGES.map(({ url }, i) => (
            <Box
              bgColor={'orange.400'}
              position={'relative'}
              key={i}
              flex={'1'}
              width={'100%'}
              variants={SlideInLeftItemVariant}
              _before={{ content: "''", paddingTop: '100%', float: 'left' }}
            >
              <Image
                width={'100%'}
                height={'100%'}
                src={url}
                position={'absolute'}
              />
            </Box>
          ))}
          <Box
            bgColor={'orange.400'}
            position={'relative'}
            display={'flex'}
            flex={'1'}
            width={'100%'}
            textAlign={'center'}
            justifyContent={'center'}
            alignItems={'center'}
            variants={SlideInLeftItemVariant}
            _before={{ content: "''", paddingTop: '100%', float: 'left' }}
          >
            <VStack alignItems={'center'}>
              <Icon color={'white'} boxSize={8} as={BsInstagram} />
              <Text fontSize={'xs'} color={'white'}>
                Join us and get all <br /> the services we proide
              </Text>
              <IconButton
                borderRadius={'full'}
                bg={'orange.500'}
                color={'white'}
                icon={<BsArrowRight />}
                aria-label={''}
              />
            </VStack>
          </Box>
        </Flex>
      </Container>
      <Footer></Footer>
    </Box>
  )
}

export default App
