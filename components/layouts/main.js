import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import { Router } from 'next/dist/client/router'
import VoxelDog from '../voxel-dog'

const Main = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Aaron Espasandin - Home</title>
                <link rel="shortcut icon" href="/images/favicon/favicon.ico"/>
            </Head>

            <Navbar path={Router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelDog />
                </NoSsr>
                {children}
            </Container>    
        </Box>
    )
}

export default Main