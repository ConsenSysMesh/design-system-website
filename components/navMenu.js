import React, { Component } from 'react';

import styled from 'styled-components'

import ReactSVG from 'react-svg'
import Link from './Link'
import Text from './Text'

const StyledWrap = styled.div`
  position: relative;
`

const StyledToggle = styled.div`
  & {
    position: relative;
    z-index: 2;
    cursor: pointer;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  svg {
    fill: ${props => props.theme.colors.primary};
    display: block;
    height: 2rem;
    width: 2.5rem;
  }
`

const StyledList = styled.div`
  & {
    position: fixed;
    z-index: 9999;
    top: 5rem;
    left: 0;
    right: 0;
    bottom: 0;
    @media (min-width: 1024px) {
      position: static;
    }
  }
  &[hidden] {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  > ul {
    position: relative;
    z-index: 9;
    background: white;
    list-style: none;
    padding: 0;

    display: flex;
    flex-flow: column;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.10);

    @media (min-width: 1024px) {
      flex-flow: row nowrap;
      box-shadow: none;
    }
  }

  > ul > li {
    background: inherit;
    line-height: 2rem;
    padding: 1rem 1rem;
    border-top: 1px solid lightgrey;

    @media (min-width: 1024px) {
      border-top: none;
      padding: 0 0 0 1rem;
    }
  }
`

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  _handleToggle = (e) => {
    e.preventDefault()
    this.setState((state) => ({
      isOpen: !state.isOpen
    }))
  }

  render() {
    return (
      <StyledWrap>
        <StyledToggle onClick={this._handleToggle}>
          <ReactSVG src='static/svg/baseline-menu-24px.svg' />
        </StyledToggle>
        <StyledList hidden={!this.state.isOpen} >
          <ul>
            <li>
              <Text fontSize={1} fontWeight={1} color={'mid-grey'}>v0.6.1</Text>
            </li>
            <li>
              <Link href='//github.com/ConsenSys/rimble-ui' target='_blank' rel='noopener'>Github</Link>
            </li>
            <li>
              <Link href='//consensys.github.io/rimble-ui/' target='_blank' rel='noopener'>Documentation</Link>
            </li>
          </ul>
        </StyledList>
      </StyledWrap>
    );
  }

}

export default Menu;
