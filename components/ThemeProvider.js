import {
  ThemeProvider as StyledThemeProvider
} from 'styled-components'

import theme from '../components/theme'

const ThemeProvider = ({...props}) => {
  return (
    <StyledThemeProvider theme={theme} {...props} />
  );
}

export default ThemeProvider
