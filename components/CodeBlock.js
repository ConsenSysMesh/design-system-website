import React, { PureComponent } from 'react'

// import Prism from 'prismjs'
import Highlight, { defaultProps } from "prism-react-renderer";
import style from '../static/prism-ghcolors.css'


class CodeBlock extends PureComponent {

  render() {
    return (
      <Highlight {...defaultProps} code={this.props.code} language='jsx' theme={undefined}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }

}

export default CodeBlock
