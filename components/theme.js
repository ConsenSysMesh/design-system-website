import { modularScale } from 'polished'

const theme = {

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontSizes: [
    modularScale(-1, '1em', 1.25),
    modularScale(0, '1em', 1.25),
    modularScale(1, '1em', 1.25),
    modularScale(2, '1em', 1.25),
    modularScale(3, '1em', 1.25),
    modularScale(4, '1em', 1.25),
    modularScale(5, '1em', 1.25),
    modularScale(6, '1em', 1.25)
  ],
  // fontWeights: [100, 200, 300, 400, 500],
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    primary: 'Inter UI'
  },
  colors: {
    black: '#000',
    'dark-grey': '#333',
    'light-grey': '#CCC',
    white: '#FFF',
    transparent: 'transparent',
    primary: '#5436D6',
    'primary-light': '#F2F4F7',
  },
  shadows: [
    '0 2px 7px 0 rgba(0,0,0,0.10)'
  ],
  radii: [
    '4px',
    '8px'
  ]
}

export default theme
