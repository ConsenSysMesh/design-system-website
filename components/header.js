import React from 'react'

import Text from './Text'
import Heading from './Heading'
import Button from './Button'
import Link from './Link'

const Header = ({}) => (
  <header>
  <Heading.h1 fontSize={[5, 7]} pr={[3, 6]}>Hi, we're Rimble 👋</Heading.h1>
  <Heading.h2 fontSize={[2, 3]} my={3} pr={[3, 6]}>
    A growing open-source library of React components and guides for helping you design, build and ship dApps everyone can use.
  </Heading.h2>
  </header>
);

export default Header
