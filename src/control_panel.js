import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StyledForm = styled.form`
  align-content: flex-end;
  display: flex;
  flex: 1 0 auto;
  flex-flow: row wrap;
  justify-content: center;

  label {
    user-select: none;
  }
  
  button {
    height: 2rem;
    margin-top: 16px;
    width: 33%;
  }
`

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 33%;
  height: 2rem;
  justify-content: center;

  input {
    visibility: hidden;
  }
  
  label {
    text-align: center;
    text-decoration: underline;
  }
  

`

const UPDATE_CONTROL_PANEL_OPTIONS = 'update_control_panel_options'
const RESET_CONTROL_PANEL_OPTIONS = 'reset_control_panel_options'

const defaultState = {
  sarcasm: false,
  vaporwave: false,
  zalgo: false,
}

export function controlPanelOptions (state = defaultState, message) {
  switch (message.type) {
    case UPDATE_CONTROL_PANEL_OPTIONS:
      return {
        sarcasm: message.sarcasm,
        vaporwave: message.vaporwave,
        zalgo: message.zalgo,
      }
    case RESET_CONTROL_PANEL_OPTIONS:
      return defaultState
    default:
      return state
  }
}

const ControlPanel = ({ sarcasm, vaporwave, zalgo, update, reset }) => {
  function handleChange (event) {
    update({
      sarcasm: event.currentTarget.sarcasm.checked,
      vaporwave: event.currentTarget.vaporwave.checked,
      zalgo: event.currentTarget.zalgo.checked
    })
  }

  return (
    <StyledForm onChange={ handleChange }>
      <InputContainer><input id='sarcasm' type='checkbox' defaultChecked={ sarcasm }/><label htmlFor='sarcasm'>sarcasm</label></InputContainer>
      <InputContainer><input id='vaporwave' type='checkbox' defaultChecked={ vaporwave }/><label htmlFor='vaporwave'>vaporwave</label></InputContainer>
      <InputContainer><input id='zalgo' type='checkbox'  defaultChecked={ zalgo }/><label htmlFor='zalgo'>zalgo</label></InputContainer>
      <button onClick={ event => {
        event.preventDefault()
        reset()
      }}>reset</button>
    </StyledForm>
  )
}

const mapStateToProps = state => ({
  sarcasm: state.controlPanelOptions.sarcasm,
  vaporwave: state.controlPanelOptions.vaporwave,
  zalgo: state.controlPanelOptions.zalgo,
})

const mapDispatchToProps = dispatch => ({
  update: ({ sarcasm, vaporwave, zalgo }) => dispatch({ type: UPDATE_CONTROL_PANEL_OPTIONS, sarcasm, vaporwave, zalgo }),
  reset: () => dispatch({ type: RESET_CONTROL_PANEL_OPTIONS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
