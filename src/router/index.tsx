import React from "react";
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
export function push(url: string) {
  console.log(url)
  history.replace('me')
}
