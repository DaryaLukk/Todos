import type React from 'react'
import type Action from '../types/Action'
import { type State } from '../types/types'

export interface Context {
  state: State
  dispatch: React.Dispatch<Action>
}
