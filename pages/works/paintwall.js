import {
    Container,
    Badge,
    List,
    ListItem
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="PaintWall">
            <Container>
                <Title>
                    PaintWall <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    An Augmented Reality app to help people decide which color to use for their walls by seeing the walls painted in real time
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>OpenCV, Tensorflow</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/paintwall-thumbnail.jpeg" alt="PaintWall" />
            </Container>
        </Layout>
    )
}

export default Work