import React from 'react';
import Button from './components/Button'
import Heading from './components/Heading'

const Header = ({}) => (
  <header>
    <Heading.h1>
      "literate-sniffle"
    </Heading.h1>
    <Heading.h1>The most important heading on this page</Heading.h1>
    <Heading.h2>With some supplementary information</Heading.h2>
    <Button>Get Started</Button>
    <Button.outline>outline button</Button.outline>
    <Button.text>text button</Button.text>
  </header>
);

export default Header;
