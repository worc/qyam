import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import sarcasmCase from './case/sarcasm'
import vaporwaveCase from './case/vaporwave'
import zalgoCase from './case/zalgo'

const Container = styled.div`
  textarea {
    height: 4rem;
    width: 100%;
  }
  
  #output {
    align-items: center;
    border: 1px solid #ace;
    display: flex;
    justify-content: center;
    min-height: 4rem;
    white-space: pre-wrap;
    
    &.zalgo {
      background-color: black;
      color: white;
    }
  }
`

const UPDATE_TEXT = 'update_text'

const defaultState = {
  text: '',
}

export function inputOutput (state = defaultState, message) {
  switch (message.type) {
    case UPDATE_TEXT:
      return {
        text: message.text,
      }
    default:
      return state
  }
}

export default () => {
  const text = useSelector(state => state.inputOutput.text)
  const sarcasm = useSelector(state => state.controlPanelOptions.sarcasm)
  const vaporwave = useSelector(state => state.controlPanelOptions.vaporwave)
  const zalgo = useSelector(state => state.controlPanelOptions.zalgo)
  const dispatch = useDispatch()

  const [output, setOutput] = useState(text)

  useEffect(() => {
    let renderedOutput = text

    if (sarcasm) {
      renderedOutput = sarcasmCase(text)
    }

    if (vaporwave) {
      renderedOutput = vaporwaveCase(renderedOutput)
    }

    if (zalgo) {
      renderedOutput = zalgoCase(renderedOutput)
    }

    setOutput(renderedOutput)
  }, [text, sarcasm, vaporwave, zalgo])

  return (
    <Container>
      <div id='output' className={ zalgo ? 'zalgo' : null }>{ output }</div>
      <textarea onChange={ event => dispatch({ type: UPDATE_TEXT, text: event.target.value })} value={ text }/>
    </Container>
  )
}
