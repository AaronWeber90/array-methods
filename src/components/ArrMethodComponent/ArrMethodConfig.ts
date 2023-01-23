type ConfigObject = {
  arrayMethodFn: (
    arr: { isEmoticon1: boolean, id: number }[],
    methodArg: boolean,
    numInput: { numInput1Val: number; numInput2Val: number }
  ) => {}[] | {}
  method: string
  hasNumberInput?: boolean
}

type ConfigObjects = {
  [key: string]: ConfigObject
}

export const ArrMethodConfig: ConfigObjects = {
  filterComponent: {
    arrayMethodFn: (arr, methodArg) =>
      arr.filter((item) => item.isEmoticon1 === methodArg),
    method: "filter(item => item ===",
  },
  findComponent: {
    arrayMethodFn: (arr, methodArg) =>
      arr.find((item) => item.isEmoticon1 === methodArg)
        ? [arr.find((item) => item.isEmoticon1 === methodArg)]
        : [],
    method: "find(item => item ===",
  },
  mapComponent: {
    arrayMethodFn: (arr, methodArg) =>
      arr.map((_, index) => ({ id: index + 1, isEmoticon1: methodArg })),
    method: "map(item =>",
  },
  findIndexOfComponent: {
    arrayMethodFn: (arr, methodArg) =>
      arr.findIndex((item) => item.isEmoticon1 === methodArg),
    method: "findIndexOf(item => item ===",
  },
  someComponent: {
    arrayMethodFn: (arr, methodArg) =>
      arr.some((item) => item.isEmoticon1 === methodArg),
    method: "some(item => item ===",
  },
  everyComponent: {
    arrayMethodFn: (arr, methodArg) =>
      arr.every((item) => item.isEmoticon1 === methodArg),
    method: "every(item => item ===",
  },
  sliceComponent: {
    arrayMethodFn: (arr, _, numInput) =>
      arr.slice(numInput.numInput1Val, numInput.numInput2Val),
    method: "slice(",
    hasNumberInput: true,
  },
  "sort-component": {
    arrayMethodFn: (arr) => [...arr].sort((a, b) => b.id - a.id),
    method: "sort((a, b) => b.id - a.id",
  },
}

{
  /* <ArrMethodComponent
        arrayMethodFn={(arr, methodArg, inputArr) =>
          [...arr].fill(methodArg, inputArr.numberInput1, inputArr.numberInput2)
        }
        method="fill"
        withNumberInput
      />  */
}
