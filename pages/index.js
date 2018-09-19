import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'

import ThemeProvider from '../components/ThemeProvider'
import Typography from '../components/typography'
import Container from '../components/container'

import Head from '../components/head'
import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'

const Masthead = styled.section`
  position: relative;
  height: 80vh;
  width: 100%;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0, 0.1)
`

const Home = () => (
  <ThemeProvider>
    <div>
      <Head title="Home" />
      <Nav/>

      <main role="main">
        <Masthead>
          <Container>

            {/* masthead section */}
            <Header/>
          </Container>
        </Masthead>
        <section>
          <Container>
            {/* body section */}
            <h1>Motivation</h1>
            <p>Make it easier to create dApps with outstanding UX.</p>
            <h1>Getting Started</h1>
            <h1>Installation</h1>
            <h1>Usage</h1>
          </Container>
        </section>
      </main>
      <Footer/>
    </div>
  </ThemeProvider>
)

export default Home
