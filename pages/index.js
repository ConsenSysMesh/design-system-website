import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import Footer from '../components/footer'
import Header from '../components/header'

import styled from 'styled-components'

const Masthead = styled.section`
  position: relative;
  height: 80vh;
  width: 100%;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
`

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav/>

    <main role="main">
      <Masthead>
        {/* masthead section */}
        <Header/>
      </Masthead>
      <section>
        {/* body section */}
        <h1>Motivation</h1>
        <p>Make it easier to create dApps with outstanding UX.</p>
        <h1>Getting Started</h1>
        <h1>Installation</h1>
        <h1>Usage</h1>
      </section>
    </main>
    <Footer/>
  </div>
)

export default Home
