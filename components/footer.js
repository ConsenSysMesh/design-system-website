import React from 'react';
import styled from 'styled-components';

import Link from '../components/link'
import Container from '../components/container'

const FooterStyled = styled.footer`
  color: white;
  background: rgba(0,0,0, 0.9);
  padding: 3rem 0 4rem;
`

const MyContainer = styled(Container)`
  display: flex;
  flex-flow: row nowrap;

  > div:first-child {
    width: calc(50%);
  }
`

const Footer = ({}) => (
  <FooterStyled>
    <MyContainer>
      <div>
        logo here

        <p>Copyright © 2018 ConsenSys Inc.</p>
      </div>
      <div>
        "QUICK LINKS"
        <ul>
          <li>
            <Link href="#!">Github</Link>
          </li>
          <li>
            <Link href="#!">Storybook/Examples</Link>
          </li>
          <li>
            <Link href="#!">Community</Link>
          </li>
          <li>
            <Link href="#!">Roadmap</Link>
          </li>
          <li>
            <Link href="#!">Team</Link>
          </li>
        </ul>
      </div>
    </MyContainer>
  </FooterStyled>
);

export default Footer;
