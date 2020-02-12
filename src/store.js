import { createStore, combineReducers } from 'redux'
import { controlPanelOptions } from './control_panel'
import { inputOutput } from './input_output'

const rootReducer = combineReducers({
  controlPanelOptions,
  inputOutput,
})

const store = createStore(rootReducer) // second argument here can apply middleware

export default store
