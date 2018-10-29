import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const globalStyle = createGlobalStyle`
  @import url('./static/inter-ui-web/inter-ui.css');

  :root {
    font-family:
      ${theme.fonts.primary},
      ${theme.fonts.sansSerif}
    ;
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    color: ${theme.colors['dark-grey']};
    font-size: 1rem;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    background: white;
    width: auto;
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
  }
`

export default globalStyle
