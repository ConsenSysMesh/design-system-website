import React from 'react';

import styled from 'styled-components'

import { fontSize, space, color } from 'styled-system'

const Text = styled.div`
  ${fontSize}
  ${space}
  ${color}
`

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
