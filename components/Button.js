import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  font-size: 1rem;
  padding: 0 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  height: 48px;
  ${'' /* line-height: 48px; */}
  font-weight: bolder;

  box-shadow:
    0 4px 6px rgba(50,50,93,.11),
    0 1px 3px rgba(0,0,0,.08)
  ;
  transition: all .15s ease;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }

  /* Color the border and text with theme.main */
  border: 1px solid transparent;
  color: white;
  border-color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.primary};

  &:hover {
    box-shadow:
      0 7px 14px rgba(50,50,93,.1),
      0 3px 6px rgba(0,0,0,.08)
    ;
    transform: translateY(-1px);
  }
`;

Button.outline = styled(Button)`
  color: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};
  background: transparent;
  &:hover {
    background-color: rgba(32,33,36,0.059);
  }
`

Button.text = styled(Button)`
  color: ${props => props.theme.colors.primary};
  border-color: transparent;
  background: transparent;
  box-shadow: none;
`

export default Button;
