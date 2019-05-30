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
import Button from '../components/Button'
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
import React, { Component } from 'react'

import { Button } from 'rimble-ui'

class Example extends Component {
  render () {
    return (
      <Button size={'medium'}>
        Click me!
      </Button>
    )
  }
}
`

const Home = () => (
  <ThemeProvider>
    <React.Fragment>
      <Typography />
      <Head title="Rimble Design System" />
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
              <Text.p fontSize={[1, 2]}>
                Decentralized applications (dApps) require users to learn new patterns and they present new hurdles for designers and front-end developers. Rimble is here to make life easier for everyone. As an open source project, Rimble aims to create common dApp UX patterns, validated through user research, and built for developers.
              </Text.p>
            </Box>
          </Container>
              <Container>
                <Box my={5}>
                  <Heading.h3 mt={3} fontSize={[3, 4]} >Get building</Heading.h3>
                  <Hr/>
                  <Text.p>Your backlog is already *this* big. And we've already designed, tested and built these. Makes sense right?</Text.p>
                  <Flex mt={4} width={1} flexDirection={['column', 'row']}>
                    <Box flex={'1 1 auto'} width={[1, 1, 1/3]} mr={5}>
                      <Flex my={3}>
                        <ReactSVG src='static/svg/fig-1.svg' />
                      </Flex>
                      <Heading.h2 fontSize={[2, 3]} fontWeight={1}>Rimble UI</Heading.h2>
                      <Text.p>Clean, customisable building blocks for putting your interface together, including UI for Ethereum concepts.</Text.p>
                      <Button.outline mt={3} mr={5} mb={5} href='https://github.com/ConsenSys/rimble-ui' target='_blank' rel='noopener'>Get the code</Button.outline>
                      <Link mt={3} ml={5} mb={5} href='https://consensys.github.io/rimble-ui/?path=/story/getting-started--welcome' target='_blank' rel='noopener'>Read the docs</Link>
                    </Box>
                    <Box flex={'1 1 auto'} width={[1, 1, 1/3]} mr={5}>
                      <Flex my={3}>
                        <ReactSVG src='static/svg/fig-2.svg' />
                      </Flex>
                      <Heading.h2 fontSize={[2, 3]} fontWeight={1}>Rimble Web3</Heading.h2>
                      <Text.p>Drop-in components that solve an Ethereum UX problem out of the box. Configure some inputs and you're ready.   </Text.p>
                      <Button.outline mt={3} mr={5} href='https://github.com/ConsenSys/rimble-web3-components' target='_blank' rel='noopener'>Get the code</Button.outline>
                      <Link disabled mt={3} ml={5} href='https://rimble-web3-components.netlify.com/?path=/story/connectionbanner--wrong-network-default' target='_blank' rel='noopener'>Docs coming soon!</Link>
                    </Box>
                    <Box flex={'1 1 auto'} width={[1, 1, 1/3]} mr={5}>
                      <Flex my={3}>
                        <ReactSVG src='static/svg/fig-3.svg' />
                      </Flex>
                      <Heading.h2 fontSize={[2, 3]} fontWeight={1}>dApp patterns</Heading.h2>
                      <Text.p>Drop-in components that solve an Ethereum UX problem out of the box. Configure some inputs and you're ready.   </Text.p>
                      <Button.outline mt={3} mr={5} href='https://github.com/ConsenSys/rimble-web3-components' target='_blank' rel='noopener'>Get the code</Button.outline>
                      <Link disabled mt={3} ml={5} href='https://rimble-web3-components.netlify.com/?path=/story/connectionbanner--wrong-network-default' target='_blank' rel='noopener'>Docs coming soon!</Link>
                    </Box>
                  </Flex>
                </Box>
              </Container>
        </section>
        <section>
          <Container>
            <Box my={5}>
              {/* body section */}
              <Heading.h1 id='getting-started' fontSize={[3, 4]}>Contribute to Rimble</Heading.h1>
              <Hr/>
              <Box mb={4}>
              <Text>Submit feedback or feature requests directly in our GitHub repos.</Text>
              </Box>
              <Box>
              <Text fontSize={[1,2]}>🍴 Fork the repo on GitHub</Text>
              <Text fontSize={[1,2]}>👯‍♀️ Clone the project to your own machine</Text>
              <Text fontSize={[1,2]}>🌱 Commit changes to your own branch</Text>
              <Text fontSize={[1,2]}>☝️ Push your work back up to your fork</Text>
              <Text fontSize={[1,2]}>👀 Submit a Pull request and we will review your changes</Text>
              </Box>
            </Box>
          </Container>
        </section>

      </main>
      <Footer/>
    </React.Fragment>
  </ThemeProvider>
)

export default Home
