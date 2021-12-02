export interface RouterType {
  path: string,
  method: string,
  file?: any,
  function: any
  auth?:any
}

export type RouterKeyType = {
  [key:string]: RouterType
}
