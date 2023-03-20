import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  chakra,
  // SimpleGrid,
  List,
  ListItem,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Layout>
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
            <div>Welcome to the space that I tried new things!</div>
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
          <Paragraph>I am working in Peplink as a Backend developer.</Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
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
          <List>
            <ListItem>
              <Link href="https://instagram.com/matt_low_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @matt_low_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://facebook.com/matthlow2" target="_black">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoFacebook />}
                >
                  @Matthew Low
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
