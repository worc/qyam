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
  
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 8px;
    width: 100%;
  }
  
  #app {
    display: flex;
    flex-flow: column nowrap;
    font-family: "Rokkitt", serif;
  }
  
  hr {
    width: 100%;
  }
  
  .zalgo {
    background-color: black;
    color: white;
    
    a {
      color: red;
    }
  }
`

render(
  <Provider store={ store }>
    <GlobalStyle/>
    <h1>q̓y̓am</h1>
    <InputOutput/>
    <hr/>
    <ControlPanel/>
    <hr/>
    <Footer/>
  </Provider>
  , document.getElementById('app')
)
