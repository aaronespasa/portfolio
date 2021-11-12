// Motion will allow us to create animated profile sections
import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transtion'
    }
})

const Section = ({ children, delay=0 }) => (
    <StyledDiv
        initial={{y: 10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay}}
        mb={6}
    >
        {children}
    </StyledDiv>
)

export default Section