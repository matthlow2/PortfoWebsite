import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelMatt from '../voxel-matt'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Matthew Low - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <VoxelMatt />
        {children}
      </Container>
    </Box>
  )
}

export default Main
