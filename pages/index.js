import Link from 'next/link'
import {
    Container,
    Box,
    Button,
    Heading,
    Image,
    useColorModeValue
} from '@chakra-ui/react'
import {Link as ChakraLink} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Footer from '../components/footer'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Layout title="Computer Vision Engineer" pageUrl="">
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a Computer Vision Engineer based in Spain!
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Aarón Espasandín
                        </Heading>
                        <p>@aaronespasa ( Developer / Engineer )</p>
                    </Box>

                    <Box
                        flexShrink={0}
                        mt={{base: 4, md: 0}}
                        ml={{md: 6}}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/profile-image.png"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me
                    </Heading>
                    <Paragraph>
                        &nbsp;&nbsp;&nbsp;Aaron is a Computer Vision Engineer based in Madrid with a passion
                        for Augmented Reality, state-of-the-art Computer Vision, Math & Front-end dev.
                        
                        <br /><br />
                        
                        He has both experience designing algorithms with optimal complexity and with development
                        (<ChakraLink><Link href="https://youtu.be/b4dMker1JlE">2nd Prize International 36h Hackathon (5000€)</Link></ChakraLink>
                        &nbsp;-&nbsp; 
                        <ChakraLink><Link href="https://youtu.be/b4dMker1JlE">Demo</Link></ChakraLink>).
                        
                        <br /><br />
                        
                        Currently, he is building:
                        <br />
                        🎨&nbsp;&nbsp;<ChakraLink><Link href="/works/paintwall"><strong>PaintWall</strong></Link></ChakraLink>: Real-time & realistic wall painting app.
                        <br />
                        🐶&nbsp;&nbsp;<strong>Augmented Web</strong>: Move & scale the dog on top of the page (a 3D model) making gestures 🙌&nbsp; to the camera.
                        
                        <br /><br />
                        
                        He has contributed to make <ChakraLink><Link href="https://pytorch.org/live/">PyTorch Live</Link></ChakraLink> available for Apple Silicon:
                        <br />
                        📲&nbsp;&nbsp;<ChakraLink><Link href="https://github.com/pytorch/live/pull/24">Create an AVD for the M1 Macs</Link></ChakraLink>: Before this PR, the Android Virtual Device was just available for the x86 CPU architecture.
                        <br />
                        📀&nbsp;&nbsp;<ChakraLink><Link href="https://github.com/pytorch/live/pull/8">RuntimeError related to quantization solved for Apple Silicon</Link></ChakraLink>: Before this small PR, it was imposible to set up a PyTorch Live template on Apple Silicon.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Link href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
                                My projects
                            </Button>
                        </Link>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2002</BioYear>
                        Born in Asturias, Spain.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Got right into the field of Front-end development.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Made my first freelance project for a lingerie&apos;s shop.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Participated in the Merkle&apos;s Divisadero 2019 Datathon and started learning Machine Learning at the beginning of the year.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Won the Second Prize of an International Hackathon (Hack the Future Challenge), competing against workers from top tech companies.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 to present</BioYear>
                        Working on two projects for improving AI education (DeepGang) and help people decide which wall color paint to buy using Augmented Reality (PaintWall).
                    </BioSection>
                </Section>
                <Footer />
            </Container>
        </Layout>
    )
}

export default Page