import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import styled from 'styled-components'

const Bold = styled.h1`
  font-weight: bolder;
  font-size: 2rem;
`

const Home = () => (
  <div>
    <Head title="Home" />
    <Bold>Make it easier to create dApps with outstanding UX.</Bold>
  </div>
)

export default Home
