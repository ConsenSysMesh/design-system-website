import React from 'react';
import styled from 'styled-components';

import Link from './Link'
import Container from './Container'

const FooterStyled = styled.footer`
  color: white;
  background: ${props => props.theme.colors.primary};
  ${'' /* padding: 3rem 0 4rem; */}
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
        <p>Copyright © 2018 ConsenSys Inc.</p>
      </div>
      {/* <div>
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
      </div> */}
    </MyContainer>
  </FooterStyled>
);

export default Footer;
