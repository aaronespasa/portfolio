import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import { FilePreviewStyle } from '../file-preview'
import { EmblaCarouselStyle } from '../embla-carousel'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20},
    enter: { opacity: 1, x: 0, y: 0},
    exit: { opacity: 0, x: 0, y: 20}
}

const domain = "https:://www.aaronespasa.com/";
const metaDescription = "Computer Vision Engineer -- Creating a Wall Painting App & adapting the web to augmented reality ⚡️";

const Layout = ({ children, title, pageUrl }) => (
    <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transtion={{ duration: 0.4, type: 'easeInOut' }}
        style={{position: 'relative' }}
    >
        <>
            {title && (
                <Head>
                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" key="twittercard" />
                    <meta name="twitter:title" content={"Aaron Espasandin -- Computer Vision Engineer" + " - " + title} key="twittertitle" />
                    <meta name="twitter:description" content={metaDescription} key="twitterdescription" />
                    <meta name="twitter:site" content="@aaronespasa" key="twittersite" />
                    <meta name="twitter:creator" content="@aaronespasa" key="twittercreator" />
                    <meta name="twitter:image" content="/images/image-captioning-thumbnail.png" key="twitterimage"/>
                    <meta name="twitter:image:alt" content="Image of the website of Aarón Espasandín" key="twitterimagealt"/>

                    {/* Facebook */}
                    <meta property="fb:app_id" content={process.env.FACEBOOK_APP_ID} />

                    {/* Open Graph */}
                    <meta property="og:url" content={domain+pageUrl} key="ogurl" />
                    <meta property="og:image" content="https://aaronespasa-portfolio-bucket.s3.eu-west-3.amazonaws.com/open-graph-image-450-300.png" key="ogimage"/>
                    <meta property="og:image:type" content="image/png" key="ogimagetype" />
                    <meta property="og:image:width" content="450" key="ogimagewidth" />
                    <meta property="og:image:height" content="300" key="ogimageheight" />
                    <meta property="og:image:alt" content="Aaron Espasandin portfolio banner" key="ogimagealt" />
                    <meta property="og:site_name" content="Aaron Espasandin -- Computer Vision Engineer" key="ogsitename"/>
                    <meta property="og:title" content={"Aaron Espasandin -- Computer Vision Engineer"} key="ogtitle" />
                    <meta property="og:description" content={metaDescription} key="ogdescription" />
                    <meta property="og:type" content="website" key="ogwebtype" />
                    <meta property="og:locale" content="en_US" key="oglocale" />


                    {/* SEO */}
                    <meta charSet="UTF-8" key="charset" />
                    <meta name="google" content="nositelinkssearchbox" />
                    <meta name="description" content={metaDescription} key="description" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />

                    {title === "Computer Vision Engineer" ?
                        <title>Aarón Espasandín - {title}</title>
                    :
                        <title>{title} - Aarón Espasandín</title>
                    }
                </Head>
            )}
            {children}
            <GridItemStyle />
            <FilePreviewStyle />
            <EmblaCarouselStyle />
        </>
    </motion.article>
)

export default Layout