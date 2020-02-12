import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import ControlPanel from './control_panel'
import InputOutput from './input_output'
import Footer from './footer'
import store from './store'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

render(
  <Provider store={ store }>
    <GlobalStyle/>
    <h1>hello world</h1>
    <InputOutput/>
    <hr/>
    <ControlPanel/>
    <hr/>
    <Footer/>
  </Provider>
  , document.getElementById('app')
)
