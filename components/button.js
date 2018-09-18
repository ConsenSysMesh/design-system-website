import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  font-size: 14px;
  ${'' /* margin: 1rem 0; */}
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  /* Color the border and text with theme.main */
  color: white;
  background: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};

  &:hover {
    box-shadow: 0 1px 2px 0 blue, 0 1px 3px 1px blue);
  }
`;

Button.outline = styled(Button)`
  color: ${props => props.theme.colors.primary};
  background: transparent;
  border: 2px solid ${props => props.theme.colors.primary};
`

Button.text = styled(Button)`
  color: ${props => props.theme.colors.primary};
  background: transparent;
  border: 2px solid transparent;
`

export default Button;
