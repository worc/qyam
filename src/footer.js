import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import sarcasmConverter from './sarcasm_case'

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Footer = ({ sarcasm, zalgo }) => (
  <StyledFooter>
    <div>{ sarcasm ? sarcasmConverter('source:') : 'source:' } <a href='https://github.com/worc/qyam'>{ sarcasm ? sarcasmConverter('https://github.com/worc/qyam/') : 'https://github.com/worc/qyam/' }</a></div>
    <div>{ sarcasm ? sarcasmConverter('lifted from and inspired by:') : 'lifted from and inspired by:' } <a href='http://www.eeemo.net/'>{ sarcasm ? sarcasmConverter('http://www.eeemo.net/') : 'http://www.eeemo.net/' }</a></div>
  </StyledFooter>
)

const mapStateToProps = state => ({
  sarcasm: state.controlPanelOptions.sarcasm,
  zalgo: state.controlPanelOptions.zalgo,
})

export default connect(mapStateToProps)(Footer)
