import React from 'react';

import styled from 'styled-components'

import { fontSize, space } from 'styled-system'

const Text = styled.div`
  color: inherit;
  ${fontSize}
  ${space}
`

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
