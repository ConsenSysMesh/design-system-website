import React, { PureComponent } from 'react'

import Highlight, { defaultProps } from 'prism-react-renderer'
import style from '../static/prism-ghcolors.css'

import styled from 'styled-components'

const StyledPre = styled.pre`
  & {
    background: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.radii[0]};
    box-shadow: ${props => props.theme.shadows[0]};
  }

  &[class*="language-"] {
    padding: 24px;
    margin: 1rem 0;
    border-color: ${props => props.theme.colors['light-grey']}
  }
`

class CodeBlock extends PureComponent {

  render() {
    return (
      <Highlight {...defaultProps} code={this.props.code} language='jsx' theme={undefined}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <StyledPre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </StyledPre>
        )}
      </Highlight>
    )
  }

}

export default CodeBlock
