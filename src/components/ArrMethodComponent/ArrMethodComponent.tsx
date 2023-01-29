import React, { useRef } from "react"
import { Button, ButtonGroup, Flex, Text, useColorMode } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

import { EMOTICONS } from "../../constants"
import { useArrMethodComponent } from "./hooks/useArrMethodComponent"
import { CustomNumberInput } from "../CustomNumberInput/CustomNumberInput"
import { ResultComponent } from "../ResultComponent/ResultComponent"
import { Props } from "./types"

export const ArrMethodComponent = ({
  arrayMethodFn,
  method,
  hasNumberInput,
  hideMethodArgElement,
}: Props) => {
  const { state, dispatch, result } = useArrMethodComponent(arrayMethodFn)
  const { colorMode } = useColorMode()

  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const fontColor = colorMode === "light" ? "#1a202c" : "#e2e8f0"

  return (
    <>
      <Flex align="center">
        <Text
          fontSize="xl"
          color={fontColor}
        >
          {`[`}
        </Text>
        <ButtonGroup
          variant="outline"
          size="sm"
          m="1"
          minHeight="3rem"
          isAttached
          alignItems="center"
        >
          {React.Children.toArray(
            state.arrayData.map(
              (button: { id: number; isEmoticon1: boolean }) => (
                <Button
                  colorScheme="blue"
                  onClick={() =>
                    dispatch({
                      type: "handled_array_change",
                      payload: button.id,
                    })
                  }
                >
                  {button.isEmoticon1
                    ? EMOTICONS.EMOTICON_1
                    : EMOTICONS.EMOTICON_2}
                </Button>
              )
            )
          )}
        </ButtonGroup>
        <Text
          fontSize="xl"
          color={fontColor}
        >
          {`].${method}`}{" "}
        </Text>
        {hasNumberInput && (
          <>
            <CustomNumberInput
              name="numInput1Val"
              value={state.numInputVals.numInput1Val}
              dispatch={dispatch}
              ref={inputRef1}
            />
            <CustomNumberInput
              name="numInput2Val"
              value={state.numInputVals.numInput2Val}
              dispatch={dispatch}
              ref={inputRef2}
            />
          </>
        )}
        {!hideMethodArgElement && (
          <Button
            m="1"
            variant="outline"
            colorScheme="blue"
            size="sm"
            onClick={() => dispatch({ type: "changed_arr_method_arg" })}
          >
            {state.arrMethodArg ? EMOTICONS.EMOTICON_1 : EMOTICONS.EMOTICON_2}
          </Button>
        )}
        <Text
          fontSize="xl"
          color={fontColor}
        >
          {`)`}
        </Text>
        <ArrowForwardIcon m="3" />
        <ResultComponent result={result} />
      </Flex>
    </>
  )
}
