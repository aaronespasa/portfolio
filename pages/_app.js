/*
 * Next.js uses the `App` component to initialize pages.
 * I modify this component to add a Layout and the ChakraProvider to all pages.
 */

// For Chakra UI to work correctly, it's important to set up the
// ChakraProvider at the root of the application!
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            {/* The Layout will add some width to all pages */}
            <Layout router={router}>
                {/* Component will represent all other pages */}
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website