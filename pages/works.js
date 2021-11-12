import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbLearnBox from '../public/images/learnbox-thumbnail.png'
import thumbPaintWall from '../public/images/paintwall-thumbnail.jpeg'
import thumbRoute from '../public/images/route-a-star-openstreetmap-thumbnail.png'
import thumbImageCaptioning from '../public/images/image-captioning-thumbnail.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            
            {/* columns={[1, 1, 2]} = columns={{sm: 1, md: 2}} */}
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="learnbox" title="LearnBox" thumbnail={thumbLearnBox}>
                        A video teleconferencing add-on to improve teacher&apos;s feedback by
                        creating real time surveys just with the voice and allowing students to answering with hand gestures
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="paintwall" title="PaintWall" thumbnail={thumbPaintWall}>
                        An Augmented Reality app to help people decide which color to use for their walls by seeing the walls painted in real time
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="router-a-star" title="A Star applied to OpenStreetMap in C++" thumbnail={thumbRoute}>
                        A program simulating Google Maps where the A Star algorithm is applied by using C++ to draw the shortest path in the OpenStreet map
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="image-captioning" title="Generate an automatic description of an image with Pytorch" thumbnail={thumbImageCaptioning}>
                        A program that helps visually impaired people by generating an automatic description of what&apos;s in an image of the web.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works