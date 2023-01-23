import { useReducer } from "react"

import { InitialState, ActionType } from "../types"

const initialState: InitialState = {
  arrayData: [
    {
      id: 1,
      isEmoticon1: true,
    },
    {
      id: 2,
      isEmoticon1: true,
    },
    {
      id: 3,
      isEmoticon1: true,
    },
    {
      id: 4,
      isEmoticon1: false,
    },
  ],
  arrMethodArg: true,
  numInputVals: {
    numInput1Val: 1,
    numInput2Val: 2,
  },
}

const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case "handled_array_change":
      return {
        ...state,
        arrayData: state.arrayData.map((item) =>
          action.payload === item.id
            ? { ...item, isEmoticon1: !item.isEmoticon1 }
            : item
        ),
      }
    case "changed_arr_method_arg": {
      return { ...state, arrMethodArg: !state.arrMethodArg }
    }
    case "changed_num_input": {
      return {
        ...state,
        numInputVals: {
          ...state.numInputVals,
          [action.name]: action.payload,
        },
      }
    }
    case "increased_num_input": {
      return {
        ...state,
        numInputVals: {
          ...state.numInputVals,
          [action.name]: state.numInputVals[action.name] + 1,
        },
      }
    }
    case "decreased_num_input": {
      return {
        ...state,
        numInputVals: {
          ...state.numInputVals,
          [action.name]: state.numInputVals[action.name] - 1,
        },
      }
    }
  }
}

export const useArrMethodComponent = (arrayMethodFn: Function) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const result = arrayMethodFn(
    state.arrayData,
    state.arrMethodArg,
    state.numInputVals
  )

  return { state, dispatch, result }
}
