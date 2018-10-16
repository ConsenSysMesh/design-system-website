import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'

import ThemeProvider from '../components/ThemeProvider'
import Typography from '../components/typography'
import Container from '../components/Container'
import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Text from '../components/Text'
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
              <Heading.h1 fontSize={[4, 5]}>Why Sniffle?</Heading.h1>
              <Hr/>
              <Text.p>Decentralized applications (dApps) present unfamiliar challenges for users and new hurdles for designers and front-end developers. Sniffle is here to make life easier for everyone. Components in Sniffle are designed for common dApp UX patterns, validated through user research, and always built with developers in mind.</Text.p>
            </Box>
            <Box my={5}>
              <Flex my={4} width={1} flexDirection={['column', 'row']}>
                <Box flex={'1 1 auto'} width={[1, 1/3]} mr={4}>
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-1.svg' />
                  </Flex>
                  <Heading.h3 fontSize={[2, 4]}>Flexible</Heading.h3>
                  <Text.p>Your tech stack and workflow are yours to decide. We impose as few constraints as possible. </Text.p>
                </Box>
                <Box flex={'1 1 auto'} width={[1, 1/3]} mr={4}>
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-2.svg' />
                  </Flex>
                  <Heading.h3 fontSize={[2, 4]}>Research-driven</Heading.h3>
                  <Text.p>We are constantly talking to dApp designers, developers, and users to understand common challenges and effective UI patterns. </Text.p>
                </Box>
                <Box flex={'1 1 auto'} width={[1, 1/3]} >
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-3.svg' />
                  </Flex>
                  <Heading.h3 fontSize={[2, 4]}>Human</Heading.h3>
                  <Text.p>Blockchain is confusing. We are a dedicated team, invested in being understandable and approachable.</Text.p>
                </Box>
              </Flex>
            </Box>
          </Container>
        </section>
        <section>
          <Container>
            <Box my={5}>
              {/* body section */}
              <Heading.h1 fontSize={[4, 5]}>Getting Started</Heading.h1>
              <Hr/>
              <Heading.h3 fontSize={[2, 4]}>Installation</Heading.h3>
              <Box boxShadow={0} borderRadius={0}>
                <CodeBlock code={'$ npm install literate-sniffle'} />
              </Box>
              <Heading.h3 fontSize={[2, 4]}>Usage</Heading.h3>
              <Box boxShadow={0} borderRadius={0}>
                <CodeBlock code={exampleCode} />
              </Box>
            </Box>
          </Container>
        </section>
        <section>
          <Container>
            <Box my={5}>
              <Heading.h1 fontSize={[4, 5]}>Made by ConsenSys Design</Heading.h1>
              <Hr/>
              <Text.p>
                Sniffle is created by the <a href="#!">ConsenSys Design Circle.</a> Want to help us define the roadmap? Submit feedback or feature requests on the <a href="#!">Sniffle GitHub page.</a>
              </Text.p>
            </Box>
          </Container>
        </section>
      </main>
      <Footer/>
    </div>
  </ThemeProvider>
)

export default Home
