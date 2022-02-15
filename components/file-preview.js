import NextLink from 'next/link'
import Image from 'next/image'
import {
    Center,
    Box,
    VStack,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/react"
import { Global } from '@emotion/react'

const FilePreview = ({title, folderName, fileName, pdfUrl}) => {
    let thumbPath = `/notes/${folderName}/thumbnails/${fileName}.png`

    return(
        <NextLink href={pdfUrl} target="_blank">
            <LinkBox cursor="pointer">
                <LinkOverlay href={pdfUrl} target="_blank">
                    <Center
                        width={260}
                        height={190}
                        overflow='hidden'
                        className="pdf-preview-image-box"
                    >
                        <Center className="pdf-preview-image-card">
                            <VStack>
                                <p className="pdf-preview-image-text">{title}</p>
                                <Box
                                    as='button'
                                    px={4}
                                    py={2}
                                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                    color='white'
                                    fontWeight='bold'
                                    borderRadius='md'
                                    bgGradient='linear(to-r, teal.500, green.500)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, teal.600, green.600)'
                                    }}    
                                >
                                    View File
                                </Box>
                            </VStack>
                        </Center>
                        <Image
                            src={thumbPath}
                            alt="PDF Preview"
                            loading="lazy"
                            layout="fill"
                            className="pdf-preview-image"
                        />
                    </Center>
                </LinkOverlay>
            </LinkBox>
        </NextLink>
    )
}

export const FilePreviewStyle = () => (
    <Global styles={`
        .pdf-preview-image-card {
            height: 65%;
            width: 80%;
            z-index: 10;
            backdrop-filter: blur(5px) saturate(156%);
            -webkit-backdrop-filter: blur(5px) saturate(156%);
            background-color: rgba(255, 255, 255, 0.64);
            border-radius: 12px;
            border: 1px solid rgba(209, 213, 219, 0.3);
            padding: 20px;
        }

        .pdf-preview-image-text {
            text-align: center;
            font-size: 1.2em;
            font-weight: bold;
            text-shadow: 6px 6px 12px rgba(150, 150, 150, 0.69);
            color: rgb(50, 50, 50);
        }

        .pdf-preview-image {
            border-radius: 5px 5px 0 0;
            z-index: -1;
            filter: blur(2px);
            -webkit-filter: blur(2px);
        }
    `}
    />
)

export default FilePreview