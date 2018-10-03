import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'

import ThemeProvider from '../components/ThemeProvider'
import Typography from '../components/typography'
import Container from '../components/Container'
import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Hr from '../components/Hr'
import {Flex, Box} from '../components/Box'

import Head from '../components/head'
import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'

import ReactSVG from 'react-svg'

import {
  borderRadius,
  boxShadow,
  backgroundImage,
} from 'styled-system'

const Masthead = styled(Flex)`
  position: relative;
  min-height: calc(100vmax/7*2.5);
  width: 100%;
  margin-top: 64px;
  padding: 2rem 0;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  background: #F2F4F7;
  overflow: hidden;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  ${'' /* background-image: url('/static/svg/fig-bg.svg'); */}

  ${backgroundImage}
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
        <Masthead backgroundImage={['none', 'url("/static/svg/fig-bg.svg")']} >
          {/* masthead section */}
          <Container>
            <Header/>
          </Container>
        </Masthead>
        <section>
          <Container>
            <Box my={5}>
              <Heading.h1>Our Approach</Heading.h1>
              <Hr/>
              <Flex my={4} width={1} flexDirection={['column', 'row']}>
                <Box flex={'1 1 auto'} width={[1, 1/3]} mr={4}>
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-1.svg' />
                  </Flex>
                  <h1>Flexible</h1>
                  <p>We aim to impose as few constraints as possible. We’re here to build a system that can handle rapid change without disruption. </p>
                </Box>
                <Box flex={'1 1 auto'} width={[1, 1/3]} mr={4}>
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-2.svg' />
                  </Flex>
                  <h1>Tested</h1>
                  <p>We get to know the builders and users of Web3. We test with the people who use our tools.  </p>
                </Box>
                <Box flex={'1 1 auto'} width={[1, 1/3]} >
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-3.svg' />
                  </Flex>
                  <h1>Human</h1>
                  <p>Blockchain is confusing. We must invest in being understandable. </p>
                </Box>
              </Flex>
              <h1>Motivation</h1>
              <p>Make it easier to create dApps with outstanding UX.</p>
            </Box>
          </Container>
        </section>
        <section>
          <Container>
            <Box my={5}>
              {/* body section */}

              <Heading.h1>Getting Started</Heading.h1>
              <Hr/>

              <Heading.h3>Installation</Heading.h3>
              <Box boxShadow={0} borderRadius={0}>
                <CodeBlock code={'$ npm install literate-sniffle'} />
              </Box>

              <Heading.h3>Usage</Heading.h3>
              <Box boxShadow={0} borderRadius={0}>
                <CodeBlock code={exampleCode} />
              </Box>
            </Box>
          </Container>
        </section>
      </main>
      <Footer/>
    </div>
  </ThemeProvider>
)

export default Home
