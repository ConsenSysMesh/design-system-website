import React from 'react'
import styled from 'styled-components'

import Link from '../components/Link'

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
import Button from '@rimble-ui/Button';

const App = () => (
  <Button color="primary" size="medium">
    Hello World
  </Button>
);
`

const Home = () => (
  <ThemeProvider>
    <div>
      <Head title="Home" />
      <Nav/>
      <main role="main">
        <Masthead backgroundImage={['none', 'none', 'url("/static/svg/fig-bg.svg")']} >
          <Container>
            <Header/>
          </Container>
        </Masthead>
        <section>
          <Container>
            <Box my={5}>
              <Heading.h1 fontSize={[3, 4]}>Why Rimble?</Heading.h1>
              <Hr/>
              <Text.p fontSize={[1, 2]}>Decentralized applications (dApps) present unfamiliar challenges for users and new hurdles for designers and front-end developers. Rimble is here to make life easier for everyone. Components in Rimble are designed for common dApp UX patterns, validated through user research, and always built with developers in mind.</Text.p>

              <Flex mt={4} width={1} flexDirection={['column', 'row']}>
                <Box flex={'1 1 auto'} width={[1, 1/3]} mr={5}>
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-1.svg' />
                  </Flex>
                  <Heading.h2 fontSize={[2, 3]}>Flexible</Heading.h2>
                  <Text.p>Your tech stack and workflow are yours to decide. We impose as few constraints as possible. </Text.p>
                </Box>
                <Box flex={'1 1 auto'} width={[1, 1/3]} mr={5}>
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-2.svg' />
                  </Flex>
                  <Heading.h2 fontSize={[2, 3]}>Research-driven</Heading.h2>
                  <Text.p>We are constantly talking to dApp designers, developers, and users to understand common challenges and effective UI patterns. </Text.p>
                </Box>
                <Box flex={'1 1 auto'} width={[1, 1/3]} >
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-3.svg' />
                  </Flex>
                  <Heading.h2 fontSize={[2, 3]}>Human</Heading.h2>
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
              <Heading.h1 fontSize={[3, 4]}>Getting Started</Heading.h1>
              <Hr/>
              <Heading.h2 fontSize={[2, 3]}>Installation</Heading.h2>
              <CodeBlock code={'$ npm install rimble'} />
              <Heading.h2 fontSize={[2, 3]}>Usage</Heading.h2>
              <CodeBlock code={exampleCode} />
            </Box>
          </Container>
        </section>
        <section>
          <Container>
            <Box my={5}>
              <Heading.h1 fontSize={[3, 4]}>Made by ConsenSys Design</Heading.h1>
              <Hr/>
              <Text.p>
                Rimble is created by the <Link href="#!">ConsenSys Design Circle.</Link> Want to help us define the roadmap? Submit feedback or feature requests on the <Link href="#!">Rimble GitHub page.</Link>
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
