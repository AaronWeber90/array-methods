export type InitialState = {
  arrayData: {
    id: number
    isEmoticon1: boolean
  }[]
  arrMethodArg: boolean
  numInputVals: {
    [key: string]: number,
    numInput1Val: number
    numInput2Val: number
  }
}

export type ActionType =
  | {
      type: "increased_num_input"
      payload: number
      name: string
    }
  | {
      type: "decreased_num_input"
      payload: number
      name: string
    }
  | {
      type: "handled_array_change"
      payload: number
    }
  | {
      type: "changed_arr_method_arg"
    }
  | {
      type: "changed_num_input"
      name: string
      payload: number
    }

export type Props = {
  arrayMethodFn: Function
  method: string
  withNumberInput?: boolean
}
