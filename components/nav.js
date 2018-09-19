import React from 'react'
import NextLink from 'next/link'

import Link from '../components/link'

import styled from 'styled-components'

import {
  color,
  space,
  width,
  flex,
  display
} from 'styled-system'


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
`

const NavList = styled.ul`
  & {
    margin: 0;
    padding: 0;
    list-style: none;

    position: relative;
    justify-content: space-between;
    align-items: center;

    height: 4rem;
  }

  ${display}
  ${flex}
`

const LinkList = styled.ul`
  & {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  > li + li {
    margin-left: 1rem;
  }
`

const Nav = () => (
  <NavWrap width={1} px={3} bg='white'>
    <NavList display='flex' flex='row nowrap'>
      <li>
        <NextLink prefetch href="/">
          <Link>Home</Link>
        </NextLink>
      </li>

      <LinkList>
        <li>
          v0.1.0
        </li>
        <li>
          <Link href="#!">Github</Link>
        </li>
        <li>
          <Link href="#!">Documentation</Link>
        </li>
        <li>
          <Link href="#!">Releases</Link>
        </li>
      </LinkList>
    </NavList>
  </NavWrap>
)

export default Nav
