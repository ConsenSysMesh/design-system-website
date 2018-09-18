import { injectGlobal } from 'styled-components'
import theme from '../components/theme'

injectGlobal`
  ${'' /* @font-face {
    font-family: "Operator Mono";
    src: url("../fonts/Operator-Mono.ttf");
  } */}

  :root {
    font-family: ${theme.fonts.sansSerif};
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    color: black;
    font-size: 1rem;
  }
`

export default injectGlobal
