import React from 'react'

import Text from './Text'
import Heading from './Heading'
import Button from './Button'
import Link from './Link'

const Header = ({}) => (
  <header>
    <Heading.h1 fontSize={[5, 7]} pr={[3, 6]}>Hi, we're Rimble 👋</Heading.h1>
    <Heading.h2 fontSize={[2, 3]} my={3}>
      We've got open-source guides, tools and React components to help you <Link href="#build">build</Link> dApps with great user experience. We solve UX problems common to all Ethereum products so you can focus on what's unique about your dApp. Everything we <Link href="#learn">learn</Link> goes in our guides.
    </Heading.h2>
  </header>
);

export default Header
