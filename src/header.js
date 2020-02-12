import React, { useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import sarcasmCase from './case/sarcasm'
import vaporwaveCase from './case/vaporwave'
import zalgoCase from './case/zalgo'

const HEADER_STRINGS = {
  title: 'q̓y̓am',
  subtitle: 'salish for study/write'
}

export default () => {
  const { sarcasm, vaporwave, zalgo } = useSelector(state => state.controlPanelOptions, shallowEqual)
  const [strings, setStrings] = useState(HEADER_STRINGS)

  useEffect(() => {
    let renderedStrings = { ...HEADER_STRINGS }

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

  return <h1 className={ zalgo ? 'zalgo' : null }><span>{ strings.title }</span><span className='sub'>{ strings.subtitle }</span></h1>
}
