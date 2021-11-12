import NextLink from 'next/link'
import {
    Container,
    Box,
    Button,
    Heading,
    Image,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Layout>
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
                            src="/images/aaronespasa.jpeg"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        &nbsp;&nbsp;&nbsp;&nbsp;Aaron is a computer vision engineer based in Madrid with a passion
                        for teaching and building innovative services which can improve people&apos;s lifes.
                        He has a knack for coming up with new impactful ideas and planning and designing them
                        to create a usable prototype as quickly as possible (<NextLink href="https://youtu.be/b4dMker1JlE">
                            <Link>36h challenge</Link>
                        </NextLink>).
                        <br />
                        Currently, he is building his own app called PaintWall to help people decide which color to use for their walls by seeing the walls painted in real time.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
                                My portfolio
                            </Button>
                        </NextLink>
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
            </Container>
        </Layout>
    )
}

export default Page