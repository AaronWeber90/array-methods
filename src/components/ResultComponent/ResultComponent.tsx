import React from "react"
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react"

import { EMOTICONS } from "../../constants"
import { ResultProps } from "./types"
import { createRndNum } from "./utils"
import { NO_RESULT_EMOJIS } from "./constants"

export const ResultComponent = ({ result }: ResultProps) => {
  const isResultArray = Array.isArray(result) && !!result.length
  const isResultNumber = Number.isInteger(result)
  const isResultBoolean = typeof result === "boolean"
  const noResultEmoji = NO_RESULT_EMOJIS[createRndNum(NO_RESULT_EMOJIS.length)]

  if (isResultArray) {
    return (
      <ButtonGroup
        variant="ghost"
        size="sm"
        spacing="2"
      >
        {React.Children.toArray(
          result.map((item) => (
            <Flex flexDirection="column">
              <Button>
                {item.isEmoticon1 ? EMOTICONS.EMOTICON_1 : EMOTICONS.EMOTICON_2}
              </Button>
              <Text>Item: {item.id}</Text>
            </Flex>
          ))
        )}
      </ButtonGroup>
    )
  }

  if (isResultNumber) {
    return <>{result}</>
  }

  if (isResultBoolean) {
    return <>{String(result)}</>
  }

  return (
    <>
      <Text
        fontStyle={"italic"}
        color="tomato"
      >
        No Result
      </Text>
      <Text fontSize={24}>{noResultEmoji}</Text>
    </>
  )
}
