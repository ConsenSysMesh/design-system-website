import React from 'react'
import styled from 'styled-components'

import Container from './Container'
import Text from './Text'
import Link from './Link'

const FooterStyled = styled.footer`
  background: ${props => props.theme.colors['primary-light']};
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
      <Link href="#!">Made by ConsenSys Design</Link>
      <Text color='#888D95'>© 2018 ConsenSys Inc.</Text>
    </MyContainer>
  </FooterStyled>
)

export default Footer
