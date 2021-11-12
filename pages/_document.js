// ColorModeScript will allow us to keep color mode settings in sync across pages
import { ColorModeScript } from "@chakra-ui/color-mode"
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
    render() {
        return(
            // In principle, the language of the document will be English
            <Html lang="en">
                <Head />
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}