import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, fontWeight, fontSize } from 'styled-system'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  ${color}
  ${fontSize}
  ${fontWeight}

  &:hover {
    text-decoration: underline;
  }
`

Link.propTypes = {
  color: PropTypes.string
}

Link.defaultProps = {
  color: 'primary',
}

export default Link;
