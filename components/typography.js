import { injectGlobal } from 'styled-components'
import theme from './theme'

injectGlobal`
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
`

export default injectGlobal
