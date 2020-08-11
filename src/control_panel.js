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
  flex: 1 0 25%;
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
  smallCaps: false,
  vaporwave: false,
  zalgo: false,
}

export function controlPanelOptions (state = defaultState, message) {
  switch (message.type) {
    case UPDATE_CONTROL_PANEL_OPTIONS:
      return {
        sarcasm: message.sarcasm,
        smallCaps: message.smallCaps,
        vaporwave: message.vaporwave,
        zalgo: message.zalgo,
      }
    case RESET_CONTROL_PANEL_OPTIONS:
      return defaultState
    default:
      return state
  }
}

const ControlPanel = ({ sarcasm, smallCaps, vaporwave, zalgo, update, reset }) => {
  function handleChange (event) {
    update({
      sarcasm: event.currentTarget.sarcasm.checked,
      smallCaps: event.currentTarget.smallCaps.checked,
      vaporwave: event.currentTarget.vaporwave.checked,
      zalgo: event.currentTarget.zalgo.checked
    })
  }

  return (
    <StyledForm onChange={ handleChange }>
      <InputContainer><input id='sarcasm' type='checkbox' defaultChecked={ sarcasm }/><label htmlFor='sarcasm'>sarcasm</label></InputContainer>
      <InputContainer><input id='smallCaps' type='checkbox' defaultChecked={ smallCaps }/><label htmlFor='smallCaps'>small caps</label></InputContainer>
      <InputContainer><input id='vaporwave' type='checkbox' defaultChecked={ vaporwave }/><label htmlFor='vaporwave'>vaporwave</label></InputContainer>
      <InputContainer><input id='zalgo' type='checkbox'  defaultChecked={ zalgo }/><label htmlFor='zalgo'>zalgo</label></InputContainer>
    </StyledForm>
  )
}

const mapStateToProps = state => ({
  sarcasm: state.controlPanelOptions.sarcasm,
  smallCaps: state.controlPanelOptions.smallCaps,
  vaporwave: state.controlPanelOptions.vaporwave,
  zalgo: state.controlPanelOptions.zalgo,
})

const mapDispatchToProps = dispatch => ({
  update: ({ sarcasm, smallCaps, vaporwave, zalgo }) => dispatch({ type: UPDATE_CONTROL_PANEL_OPTIONS, sarcasm, smallCaps, vaporwave, zalgo }),
  reset: () => dispatch({ type: RESET_CONTROL_PANEL_OPTIONS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
