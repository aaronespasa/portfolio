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
        <Layout title="Image Captioning">
            <Container>
                <Title>
                    Image Captioning with Pytorch <Badge>2020</Badge>
                </Title>
                <Paragraph>
                    A program that helps visually impaired people by generating an automatic description of what&apos;s in an image of the web.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/aaronespasa/image-captioning-pytorch">Image Captioning with Pytorch <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PyTorch, COCO Dataset</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/image-captioning-thumbnail.png" alt="Image Captioning" />
            </Container>
        </Layout>
    )
}

export default Work