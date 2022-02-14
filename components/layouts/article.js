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
const metaDescription = "Aaron Espasandin is a Computer Vision Engineer 👁 based in Spain. He's currently building a real-time image segmentation IOS app 📱 and adapting WebGL to augmented reality by allowing anyone to perform transformations on 3D models with their hands! 🖐";

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
                    <meta name="twitter:title" content={"Aaron Espasandin, a Computer Vision Engineer" + " - " + title} key="twittertitle" />
                    <meta name="twitter:description" content={metaDescription} key="twitterdescription" />
                    <meta name="twitter:site" content="@aaronespasa" key="twittersite" />
                    <meta name="twitter:creator" content="@aaronespasa" key="twittercreator" />
                    <meta name="twitter:image" content="/images/image-captioning-thumbnail.png" key="twitterimage"/>
                    <meta name="twitter:image:alt" content="Image of the website of Aarón Espasandín" key="twitterimagealt"/>

                    {/* Open Graph */}
                    <meta property="og:url" content={domain+pageUrl} key="ogurl" />
                    <meta property="og:image" content="https://aaronespasa-portfolio-bucket.s3.eu-west-3.amazonaws.com/open-graph-image.png" key="ogimage"/>
                    <meta property="og:site_name" content="Aaron Espasandin Portfolio" key="ogsitename"/>
                    <meta property="og:title" content={"Aaron Espasandin, a Computer Vision Engineer"} key="ogtitle" />
                    <meta property="og:description" content={metaDescription} key="ogdescription" />

                    {/* SEO */}
                    <meta charset="UTF-8" key="charset" />
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