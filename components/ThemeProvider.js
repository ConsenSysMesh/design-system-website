import {
  ThemeProvider as StyledThemeProvider,
  injectGlobal
} from 'styled-components'

import theme from '../components/theme'

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const ThemeProvider = ({...props}) => {
  return (
    <StyledThemeProvider theme={theme} {...props} />
  );
}

export default ThemeProvider
