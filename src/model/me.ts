/* 定义Home页面类型*/
export enum example {
  todo,
  list
}

export interface menuTree {
  label: string,
  showChildTree:boolean
  children: menuChildTree[]
}

export interface menuChildTree {
  label: string
}
