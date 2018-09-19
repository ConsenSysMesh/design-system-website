import {
  ThemeProvider as StyledThemeProvider,
  injectGlobal
} from 'styled-components'

import theme from './theme'

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
  }
`

const ThemeProvider = ({...props}) => {
  return (
    <StyledThemeProvider theme={theme} {...props} />
  );
}

export default ThemeProvider
