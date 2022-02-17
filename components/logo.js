import Link from 'next/link'
import Image from 'next/image'
import { Text, Box, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

& .logo-container{
    transition: 0.6s;
}

&:hover .logo-container {
    transform: rotate(360deg);
}
`

const Logo = () => {
    const footPrintImg = '/images/logo-no-stroke.png'

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Box className="logo-container">
                        <Image src={footPrintImg} width={20} height={20} alt="Logo" />
                    </Box>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={3}>
                        Aarón Espasandín
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo