import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Header from './header'
import ControlPanel from './control_panel'
import InputOutput from './input_output'
import Footer from './footer'
import store from './store'

import GlobalStyle from './global_style'

render(
  <Provider store={ store }>
    <GlobalStyle/>
    <Header/>
    <InputOutput/>
    <hr/>
    <ControlPanel/>
    <hr/>
    <Footer/>
  </Provider>
  , document.getElementById('app')
)
