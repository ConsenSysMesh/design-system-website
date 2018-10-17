import React from 'react'

import Text from './Text'
import Heading from './Heading'
import Button from './Button'

const Header = ({}) => (
  <header>
    <Heading.h1 fontSize={[5, 7]}>Rimble Design System</Heading.h1>
    <Text.p fontSize={2} mt={3} mb={5}>Adaptable components and design standards for decentralized applications.</Text.p>

    <Button width={['100%', 'auto']} mr={[0, 3]} mb={[3, 0]}>Get Started</Button>
    <Button.outline width={['100%', 'auto']}>Documentation</Button.outline>
  </header>
);

export default Header
