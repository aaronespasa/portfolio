import {
    Box,
    Button,
    Heading,
    Icon,
    Link,
    SimpleGrid,
} from '@chakra-ui/react'
import Section from '../components/section'
import {
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'

const Footer = () => {
    return (
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                On the web
            </Heading>
            <SimpleGrid columns={[1, 1, 3]}>
                <Box>
                    <Link href="https://github.com/aaronespasa" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@aaronespasa</Button>
                    </Link>
                </Box>
                <Box>
                    <Link href="https://www.linkedin.com/in/aaronespasa/" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>@aaronespasa</Button>
                    </Link>
                </Box>
                <Box>
                    <Link href="https://twitter.com/aaronespasa" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>@aaronespasa</Button>
                    </Link>
                </Box>
            </SimpleGrid>
        </Section>
    )
}

export default Footer