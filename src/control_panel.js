import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StyledForm = styled.form`
  label {
    user-select: none;
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
    update({ sarcasm: event.currentTarget.sarcasm.checked, zalgo: event.currentTarget.zalgo.checked })
  }

  return (
    <StyledForm onChange={ handleChange }>
      <input id='sarcasm' type='checkbox' defaultChecked={ sarcasm }/><label htmlFor='sarcasm'>sarcasm</label>
      <input id='vaporwave' type='checkbox' defaultChecked={ vaporwave }/><label htmlFor='vaporwave'>vaporwave</label>
      <input id='zalgo' type='checkbox'  defaultChecked={ zalgo }/><label htmlFor='zalgo'>zalgo</label>
      <button onClick={ reset }>reset</button>
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
