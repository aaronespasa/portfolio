import {
    Container,
    Heading,
    HStack,
    Box
} from '@chakra-ui/react'
// import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Footer from '../components/footer'

const FilePreview = ({title, folderName, fileName}) => {
    let thumbPath = `/notes/${folderName}/thumbnails/${fileName}.png`

    return(
        <Box
            borderRadius="md"
            width={200}
            height={200}
            bgImage={thumbPath}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="contain"
        >
        </Box>
    )
}

const Works = () => {
    return (
        <Layout title="Notes" pageUrl="notes">
            <Container>
                {/* Page Title */}
                <Heading as="h2" variant="page-title">
                    Notes
                </Heading>

                {/* Discrete Mathematics Section */}
                <Section delay={0.6}>
                    <Heading as="h3" variant="section-title">
                        Discrete Mathematics
                    </Heading>
                    <Paragraph>
                        This is the description of Discrete Mathematics.
                    </Paragraph>
                    <HStack spacing={8}>
                        <FilePreview
                            title="Set Theory & Combinatorics"
                            folderName="discrete-math"
                            fileName="set-theory-combinatorics"
                        />
                        <FilePreview
                            title="Set Theory & Combinatorics"
                            folderName="discrete-math"
                            fileName="set-theory-combinatorics"
                        />
                        <FilePreview
                            title="Set Theory & Combinatorics"
                            folderName="discrete-math"
                            fileName="set-theory-combinatorics"
                        />
                    </HStack>
                </Section>
                
                <Footer />
            </Container>
        </Layout>
    )
}

export default Works