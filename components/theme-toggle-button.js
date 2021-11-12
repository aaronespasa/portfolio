import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    // toggleColorMode changes the theme from dark to light (and viceversa)
    const { toggleColorMode } = useColorMode()

    return (
        // Remember: useColorModeValue(lightModeValue, darkModeValue)
        <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
        ></IconButton>
    )
}

export default ThemeToggleButton