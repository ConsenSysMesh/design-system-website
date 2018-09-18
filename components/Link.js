import React from 'react';
import styled from 'styled-components'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};  
`

export default Link;
