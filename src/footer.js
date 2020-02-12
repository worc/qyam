import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import sarcasmCase from './case/sarcasm'
import vaporwaveCase from './case/vaporwave'
import zalgoCase from './case/zalgo'

const StyledFooter = styled.footer`
  display: flex;
  flex: 0 0 auto;
  flex-flow: row wrap;
  justify-content: center;
  padding: 8px;
  
  > div {
    flex: 1 0 100%;
    text-align: center;
  }
`

const FOOTER_STRINGS = {
  source: 'source:',
  sourceUrl: 'https://github.com/worc/qyam/',
  lifted: 'lifted from and inspired by:',
  liftedUrl: 'http://eeemo.net/',
}

const Footer = ({ sarcasm, vaporwave, zalgo }) => {
  const [strings, setStrings] = useState(FOOTER_STRINGS)

  useEffect(() => {
    let renderedStrings = { ...FOOTER_STRINGS }

    if (sarcasm) {
      renderedStrings = Object.keys(renderedStrings).reduce((acc, element) => {
        return {
          ...acc,
          [element]: sarcasmCase(renderedStrings[element]),
        }
      }, {})
    }

    if (vaporwave) {
      renderedStrings = Object.keys(renderedStrings).reduce((acc, element) => {
        return {
          ...acc,
          [element]: vaporwaveCase(renderedStrings[element]),
        }
      }, {})
    }

    if (zalgo) {
      renderedStrings = Object.keys(renderedStrings).reduce((acc, element) => {
        return {
          ...acc,
          [element]: zalgoCase(renderedStrings[element]),
        }
      }, {})
    }

    setStrings(renderedStrings)

  }, [sarcasm, vaporwave, zalgo])

  return (
    <StyledFooter className={ zalgo ? 'zalgo' : null }>
      <div>{ strings.source } <a href='https://github.com/worc/qyam'>{ strings.sourceUrl }</a></div>
      <div>{ strings.lifted } <a href='http://www.eeemo.net/'>{ strings.liftedUrl }</a></div>
    </StyledFooter>
  )
}

const mapStateToProps = state => ({
  sarcasm: state.controlPanelOptions.sarcasm,
  vaporwave: state.controlPanelOptions.vaporwave,
  zalgo: state.controlPanelOptions.zalgo,
})

export default connect(mapStateToProps)(Footer)
