import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="orange" p={3} mb={6} align="center">
        Hello, I am a back-end developer based in Hong Kong!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Matthew Low
          </Heading>
          <p>I dun know what I need to type here</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
