import React from 'react'
import styled from 'styled-components'

import {
  color,
  space,
  width,
  flex,
  display
} from 'styled-system'

import Container from './Container'
import NavMenu from './navMenu'
import Heading from './Heading'

const NavWrap = styled.nav`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
  max-width: 100vw;

  ${space}
  ${width}
  ${color}

  background: #FFFFFF;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);
`

const NavList = styled.ul`
  & {
    margin: 0;
    padding: 0;
    list-style: none;

    position: relative;
    justify-content: space-between;
    align-items: center;

    height: 5rem;
  }

  ${display}
  ${flex}
`

const Nav = () => (
  <NavWrap width={1} bg='white'>
    <Container>
      <NavList display='flex' flex='row nowrap'>
        <li>
          <Heading.h1 fontSize={[1, 2]} fontWeight={1} color={'mid-grey'}>Rimble Design System</Heading.h1>
        </li>
        <NavMenu></NavMenu>
      </NavList>
    </Container>
  </NavWrap>
)

export default Nav
