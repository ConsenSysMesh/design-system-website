import React, { PureComponent } from 'react'

import Prism from 'prismjs'
import style from '../static/prism-ghcolors.css'

class CodeBlock extends PureComponent {

  componentDidMount() {
    this._hightlight()
  }

  componentDidUpdate() {
    this._hightlight()
  }

  _hightlight() {
    Prism.highlightElement(this._domNode, false)
  }

  _handleRef = (node) => {
    this._domNode = node
  }

  render() {
    return (
      <pre>
        <code ref={this._handleRef} className='language-javascript'>{this.props.children}</code>
      </pre>
    )
  }

}

export default CodeBlock
