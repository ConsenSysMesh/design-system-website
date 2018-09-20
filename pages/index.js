import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'

import ThemeProvider from '../components/ThemeProvider'
import Typography from '../components/typography'
import Container from '../components/Container'
import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'

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
  background: #F2F4F7;
`

const exampleCode = `
import React from 'react';
import Button from '@material-ui/core/Button';

const App = () => (
  <Button variant="contained" color="primary">
    Hello World
  </Button>
);
`;

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
            <Heading.h1>Lorem ipsum dolor sit amet, consectetur.</Heading.h1>
            <Heading.h2>Lorem ipsum dolor sit amet, consectetur.</Heading.h2>
            <Heading.h3>Lorem ipsum dolor sit amet, consectetur.</Heading.h3>
            <Heading.h4>Lorem ipsum dolor sit amet, consectetur.</Heading.h4>
            <Heading.h5>Lorem ipsum dolor sit amet, consectetur.</Heading.h5>
            <Heading.h6>Lorem ipsum dolor sit amet, consectetur.</Heading.h6>
            <Heading>Lorem ipsum dolor sit amet, consectetur.</Heading>

            <h1>Motivation</h1>
            <p>Make it easier to create dApps with outstanding UX.</p>

            <h1>Getting Started</h1>

            <h1>Installation</h1>
            <CodeBlock code={'$ npm install literate-sniffle'} />

            <h1>Usage</h1>
            <CodeBlock code={exampleCode} />

          </Container>
        </section>
      </main>
      <Footer/>
    </div>
  </ThemeProvider>
)

export default Home
