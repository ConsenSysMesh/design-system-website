import React from 'react'
import styled from 'styled-components'

import { tint } from 'polished'

import {
  space,
  width,
} from 'styled-system'

const Button = styled.button.attrs({
  fgcolor: props => props.theme.colors.white,
  bgcolor: props => props.theme.colors.primary,
  hovercolor: props => tint(0.1, props.theme.colors.primary)
})`
  display: inline-block;
  text-align: center;
  font: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;

  font-size: 1rem;
  font-weight: bold;
  height: 56px;
  line-height: 56px;
  padding: 0 2rem;
  border-radius: 4px;
  box-shadow:
    0 4px 6px rgba(50,50,93,.11),
    0 1px 3px rgba(0,0,0,.08)
  ;
  transition: all .15s ease;
  /* Color the border and text with theme.main */
  color: ${props => props.fgcolor};
  background-color: ${props => props.bgcolor};

  &:hover {
    background-color: ${ props => props.hovercolor };
    transform: translateY(-1px);
    box-shadow:
      0 7px 14px rgba(50,50,93,.1),
      0 3px 6px rgba(0,0,0,.08)
    ;
  }

  ${space}
  ${width}
`;

Button.outline = styled(Button).attrs({
  fgcolor: props => props.theme.colors.primary,
  bgcolor: props => props.theme.colors.white,
  hovercolor: props => tint(0.9, props.theme.colors.primary)
})`
  color: ${props => props.fgcolor};
  background-color: transparent;
  border: 1px solid ${props => props.fgcolor};
  &:hover {
    background-color: ${props => props.hovercolor}
  }
`

Button.text = styled(Button.outline)`
  border: none;
  box-shadow: none;
`

export default Button;
