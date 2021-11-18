import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="A Star C++">
            <Container>
                <Title>
                    A Star applied to OpenStreetMap in C++ <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A program simulating Google Maps where the A Star algorithm is applied by using C++ to draw the shortest path in the OpenStreet map
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/aaronespasa/a-star-openstreetmap">Route planning real-world<ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>C++, OpenStreetMap</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/route-a-star-openstreetmap-thumbnail.png" alt="Route A Star" />
            </Container>
        </Layout>
    )
}

export default Work