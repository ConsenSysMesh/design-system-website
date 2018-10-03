import React from 'react'

import Text from './Text'
import Heading from './Heading'
import Button from './Button'

const Header = ({}) => (
  <header>
    <Heading.h1 fontSize={[5, 6]}>"literate-sniffle" Design System</Heading.h1>
    <Text.p>React component library for building dApps.</Text.p>

    <Button>Get Started</Button>
    <Button.outline>Documentation</Button.outline>
  </header>
);

export default Header
