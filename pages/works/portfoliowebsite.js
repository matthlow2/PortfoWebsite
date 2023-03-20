import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="portfolio">
      <Container>
        <Title>
          Portfolio Website <Badge> 2023 </Badge>
        </Title>
        <P>The portfolio website you are exploring!</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://portfolio-six-beryl-69.vercel.app/">
              https://portfolio-six-beryl-69.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, ReactJS, Chakra-UI</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
