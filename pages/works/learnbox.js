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
        <Layout title="LearnBox">
            <Container>
                <Title>
                    LearnBox <Badge>2020</Badge>
                </Title>
                <Paragraph>
                    A video teleconferencing add-on to improve teacher&apos;s feedback by
                    creating real time surveys just with the voice and allowing students to answering with hand gestures
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>YouTube</Meta>
                        <Link href="https://www.youtube.com/watch?v=b4dMker1JlE">LearnBox: AI to get REAL-TIME FEEDBACK in ONLINE CLASSES <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/aaronespasa/hand-gestures-interactive-test">Hand gestures interactive test <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>OpenCV, Seaborn, JavaScript, Google Cloud Natural Language API</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/learnbox-thumbnail.png" alt="LearnBox" />
            </Container>
        </Layout>
    )
}

export default Work