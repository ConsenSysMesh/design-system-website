import React from 'react'

import Text from './Text'
import Heading from './Heading'
import Button from './Button'

const Header = ({}) => (
  <header>
    <Heading.h1 fontSize={[5, 6]}>Sniffle Design System</Heading.h1>
    <Text.p fontSize={3} mb={5}>Adaptable components and design standards for decentralized applications.</Text.p>

    <Button>Get Started</Button>
    <Button.outline>Documentation</Button.outline>
  </header>
);

export default Header
