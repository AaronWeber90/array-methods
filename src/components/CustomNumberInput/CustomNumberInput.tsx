import { forwardRef } from "react"

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

import { NumInputProps } from "./types"

export const CustomNumberInput = forwardRef(function CustumNumberInput(
  props: NumInputProps,
  ref: any
) {
  const { name, value, dispatch } = props
  return (
    <NumberInput
      maxW={16}
      name={name}
      value={value}
    >
      <NumberInputField
        ref={ref}
        onChange={(e) =>
          dispatch({
            type: "changed_num_input",
            name: e.target.name,
            payload: Number(e.target.value),
          })
        }
      />
      <NumberInputStepper>
        <NumberIncrementStepper
          onClick={() =>
            dispatch({
              type: "increased_num_input",
              name: ref?.current?.name,
            })
          }
        />
        <NumberDecrementStepper
          onClick={() =>
            dispatch({
              type: "decreased_num_input",
              name: ref?.current?.name,
            })
          }
        />
      </NumberInputStepper>
    </NumberInput>
  )
})
