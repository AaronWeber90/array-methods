import { VStack, StackDivider, Box, useColorMode } from "@chakra-ui/react"

import { ArrMethodComponent } from "./components/ArrMethodComponent/ArrMethodComponent"
import { ArrMethodConfig } from "./components/ArrMethodComponent/ArrMethodConfig"
import { Header } from "./components/Header/Header"

export const App = () => {
  const { colorMode } = useColorMode()

  return (
    <Box bgColor={colorMode === "light" ? "#e2e8f0" : "#1a202c"}>
      <Header />
      <Box
        pt={6}
        pb={10}
        maxW="800px"
        minH="100vh"
        m="0 auto"
      >
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="left"
        >
          {Object.entries(ArrMethodConfig).map(([key, obj]) => (
            <ArrMethodComponent
              key={key}
              arrayMethodFn={obj.arrayMethodFn}
              method={obj.method}
              withNumberInput={obj.hasNumberInput}
            />
          ))}
        </VStack>
      </Box>
    </Box>
  )
}

export default App
