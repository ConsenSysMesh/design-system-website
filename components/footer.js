import React from 'react';
import styled from 'styled-components';

import Link from './Link'
import Container from './Container'

import Text from './Text'

const FooterStyled = styled.footer`
  color: white;
  background: #F2F4F7;
`

const MyContainer = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`

const Footer = ({}) => (
  <FooterStyled>
    <MyContainer>
      <Link href="#1">Made by ConsenSys Design</Link>
      <Text color={'gray'}>© 2018 ConsenSys Inc.</Text>
    </MyContainer>
  </FooterStyled>
);

export default Footer;
