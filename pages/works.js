import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbWebScraping from '../public/images/works/webscrap_1.png'
import thumbPortfolio from '../public/images/works/portfolio_1.png'
import Layout from '../components/layouts/article'
import React from 'react'
class works extends React.Component {
  render() {
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
                title="Marketing Web Scraping"
                thumbnail={thumbWebScraping}
              >
                A data scraping program that extracting data from dedicated
                websites
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="portfoliowebsite"
                title="Portfolio Website"
                thumbnail={thumbPortfolio}
              >
                The portfolio website you are exploring!
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </Layout>
    )
  }
}
// const works = () => {
//   return (
//     <Layout>
//       <Container>
//         <Heading as="h3" variant="section-title">
//           Works
//         </Heading>
//         <SimpleGrid columns={[1, 1, 2]} gap={6}>
//           <Section>
//             <WorkGridItem
//               id="webscraping"
//               title="Marketing Web Scraping"
//               thumbnail={thumbWebScraping}
//             >
//               A data scraping program that extracting data from dedicated
//               websites
//             </WorkGridItem>
//           </Section>
//           <Section>
//             <WorkGridItem
//               id="portfoliowebsite"
//               title="Portfolio Website"
//               thumbnail={thumbPortfolio}
//             >
//               The portfolio website you are exploring!
//             </WorkGridItem>
//           </Section>
//         </SimpleGrid>
//       </Container>
//     </Layout>
//   )
// }

export default works
