import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbWebScraping from '../public/images/works/webscrapingthumbnail.png'
import Layout from '../components/layouts/article'
const works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" variant="section-title">
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="webscraping"
              title="Web-Scraping"
              thumbnail={thumbWebScraping}
            >
              A web scraping program that loops through all your dedicated
              website
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default works
