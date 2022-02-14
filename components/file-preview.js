import NextLink from 'next/link'
import Image from 'next/image'
import {
    Box,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/react"
import { Global } from '@emotion/react'

const FilePreview = ({_title, folderName, fileName, pdfUrl}) => {
    let thumbPath = `/notes/${folderName}/thumbnails/${fileName}.png`

    return(
        <NextLink href={pdfUrl} target="_blank">
            <LinkBox cursor="pointer">
                <LinkOverlay href={pdfUrl} target="_blank">
                    <Box
                        width={300}
                        height={220}
                        overflow='hidden'
                    >
                        <Image
                            src={thumbPath}
                            alt="PDF Preview"
                            loading="lazy"
                            layout="fill"
                            objectFit="cover"
                            className="pdf-preview-image"
                        />
                    </Box>
                </LinkOverlay>
            </LinkBox>
        </NextLink>
    )
}

export const FilePreviewStyle = () => (
    <Global styles={`
        .pdf-preview-image {
            border-radius: 12px;
        }
    `}
    />
)

export default FilePreview