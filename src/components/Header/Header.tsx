import { Flex, useColorMode, Button, Text, Box } from "@chakra-ui/react"

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      position="sticky"
      top={0}
      zIndex="sticky"
      bg={colorMode === "light" ? "#1a202c" : "#e2e8f0"}
      p={4}
    >
      <Flex
        justifyContent="space-between"
        maxW="800px"
        m="0 auto"
      >
        <Text
          bg={colorMode === "light" ? "#e2e8f0" : "#1a202c"}
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
        >
          [Array] Method Playground
        </Text>
        <Button
          onClick={toggleColorMode}
          ml={4}
          variant="ghost"
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
        >
          {colorMode === "light" ? "🌙" : "☀️"}
        </Button>
      </Flex>
    </Box>
  )
}
