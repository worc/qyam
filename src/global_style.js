import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { shallowEqual, useSelector } from 'react-redux'

export default () => {
  const { smallCaps } = useSelector(state => state.controlPanelOptions, shallowEqual)
  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-variant: ${ smallCaps ? 'small-caps' : 'initial' };
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
      white-space: pre-wrap;
    }
    
    h1 {
      align-items: center;
      display: flex;
      justify-content: space-between;
      
      .sub {
        font-size: 1rem;
      }
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

  return <GlobalStyle/>
}
