import React from 'react';
import Button from './Button'
import Heading from './Heading'
import Text from './Text'

const Header = ({}) => (
  <header>
    <Heading.h1>Literate-sniffle</Heading.h1>
    <Heading>The most important heading on this page</Heading>
    <Text.p>With some supplementary information</Text.p>

    <Button>Get Started</Button>
    <Button.outline>Documentation</Button.outline>
    {/* <Button.text>text button</Button.text> */}
  </header>
);

export default Header;
