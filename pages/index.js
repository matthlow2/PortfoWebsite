import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('orange', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello, I am a Backend developer based in Hong Kong!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Matthew Low
          </Heading>
          <p>I dun know what I need to type here</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.jfif"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Matthew is working in Peplink as a Backend developer.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works"></NextLink>
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My Porfolio
          </Button>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Hong Kong
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Graduated in the BEng., Materials Engineering,
          <br></br>City University of Hong Kong
        </BioSection>
        <BioSection>
          <BioYear>2020/1 to 2021/6</BioYear>
          Work as a Senior Customer Executive in HKT Limited
        </BioSection>
        <BioSection>
          <BioYear>2021/7 to 2022/4</BioYear>
          Work as a Technical Sales and Business Development Executive in
          Peplink
        </BioSection>
        <BioSection>
          <BioYear>2022/4 to present</BioYear>
          Work as a Backend developer in Peplink
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
      </Section>
    </Container>
  )
}

export default Page
