import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="webscrap">
      <Container>
        <Title>
          Web Scrap <Badge>2022</Badge>
        </Title>
        <P>
          A web scraping program that loops through all your dedicated website
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://mws.peplink.com/">
              https://mws.peplink.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, React Native, MongoDB</span>
          </ListItem>
          <ListItem></ListItem>
        </List>

        <WorkImage src="/images/works/webscrap_1.png" alt="webscrap" />
        <WorkImage src="/images/works/webscrap_2.png" alt="webscrap" />
      </Container>
    </Layout>
  )
}

export default Work
