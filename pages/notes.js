import {
    Container,
    Heading
} from '@chakra-ui/react'
// import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Footer from '../components/footer'
import EmblaCarousel from "../components/embla-carousel";

const Works = () => {
    const bucketUrl = "https://aaronespasa-portfolio-bucket.s3.eu-west-3.amazonaws.com/"

    const discreteMathPdfs = [
        {
            title: "Set Theory & Combinatorics",
            folderName: "discrete-math",
            fileName: "set-theory-combinatorics",
            pdfUrl: bucketUrl + "set-theory-combinatorics.pdf",
            key: "DM-STC"
        },
        {
            title: "Graph Theory",
            folderName: "discrete-math",
            fileName: "graph-theory",
            pdfUrl: bucketUrl + "graph-theory.pdf",
            key: "DM-GT"
        },
        {
            title: "Exams",
            folderName: "discrete-math",
            fileName: "exams",
            pdfUrl: bucketUrl + "exams.pdf",
            key: "DM-EX"
        }
    ]

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
                       Discrete mathematics is the study of discrete data rather than the continuous data. This branch of mathematics covers topics like set theory, graph theory, permutations, etc.<br/><br/>
                       
                       Notes of <strong>a whole Discrete Mathematics university course</strong>:
                    </Paragraph>
                    <EmblaCarousel slides={discreteMathPdfs} />
                </Section>
                
                <Footer />
            </Container>
        </Layout>
    )
}

export default Works