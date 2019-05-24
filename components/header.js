import React from 'react'

import Text from './Text'
import Heading from './Heading'
import Button from './Button'
import Link from './Link'

const Header = ({}) => (
  <header>
    <Heading.h1 fontSize={[5, 7]} pr={[3, 6]}>Hi, we're Rimble 👋</Heading.h1>
    <Heading.h2 fontSize={[2, 3]} my={3} pr={[3, 6]}>
      A growing open-source library of components and guides for helping you make dApps everyone can use. We put out React components to help you <Link href="#build">build</Link> and guides to help you <Link href="#learn">learn.
      </Link>
    </Heading.h2>
  </header>
);

export default Header
