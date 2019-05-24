import React from 'react'
import styled from 'styled-components'

import Link from '../components/Link'

import ThemeProvider from '../components/ThemeProvider'
import Typography from '../components/typography'
import Container from '../components/Container'
import CodeBlock from '../components/CodeBlock'
import Button from '../components/Button'
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



const Home = () => (
  <ThemeProvider>
    <React.Fragment>
      <Typography />
      <Head title="Rimble – Open-source components and guides for building amazing dApps" />
      <Nav/>
      <main role="main">
        <Masthead backgroundImage={['none', 'none', 'url("/static/svg/fig-bg.svg")']} >
          <Container>
            <Header/>
          </Container>
        </Masthead>




        <section id="build">
          <Container>
            <Box my={5}>
              <Heading.h3 mt={3} fontSize={[1, 2]} >👷‍♀️ Build</Heading.h3>
              <Hr/>
              <Text.p>dApp component libraries</Text.p>
              <Flex mt={4} width={1} flexDirection={['column', 'row']}>
                <Box flex={'1 1 auto'} width={[1, 1/2]} mr={5}>
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-1.svg' />
                  </Flex>
                  <Heading.h2 fontSize={[2, 3]} fontWeight={1}>Rimble UI</Heading.h2>
                  <Text.p>Clean, customisable building blocks for putting your interface together, including UI for Ethereum concepts.</Text.p>
                  <Button.outline mt={3} mr={5} mb={5} href='https://github.com/ConsenSys/rimble-ui' target='_blank' rel='noopener'>Get the code</Button.outline>
                  <Link mt={3} ml={5} mb={5} href='https://consensys.github.io/rimble-ui/?path=/story/getting-started--welcome' target='_blank' rel='noopener'>Read the docs</Link>
                </Box>
                <Box flex={'1 1 auto'} width={[1, 1/2]} mr={5}>
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-2.svg' />
                  </Flex>
                  <Heading.h2 fontSize={[2, 3]} fontWeight={1}>Rimble Web3</Heading.h2>
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
          <Heading.h3 fontSize={[1, 2]} id="learn">🤓 Learn</Heading.h3>

          <Text.p>Research-led guides for creating user-friendly blockchain experiences</Text.p>
          <Hr/>
          <Flex mt={4} width={1} flexDirection={['column', 'row']}>
            <Box flex={'1 1 auto'} width={[1, 1/3]} mr={5}>
              <Flex my={3}>
                <ReactSVG src='static/svg/fig-3.svg' />
              </Flex>
              <Heading.h2 fontSize={[2, 3]} fontWeight={1}>UX</Heading.h2>
              <Text.p>In-depth pieces on designing patterns that help your users navigate Ethereum.</Text.p>
              <Link disabled mt={3} ml={5} href='#' target='_blank' rel='noopener'>Guide coming soon!</Link>
            </Box>
            <Box flex={'1 1 auto'} width={[1, 1/3]} mr={5}>
              <Flex my={3}>
                <ReactSVG src='static/svg/fig-4.svg' />
              </Flex>
              <Heading.h2 fontSize={[2, 3]} fontWeight={1}>Content</Heading.h2>
              <Text.p>Tips on designing dApps that talk sense – how to design the words in your dApp. </Text.p>
              <Link disabled mt={3} ml={5} href='#' target='_blank' rel='noopener'>Guide coming soon!</Link>
            </Box>
            <Box flex={'1 1 auto'} width={[1, 1/3]} mr={5}>
              <Flex my={3}>
                <ReactSVG src='static/svg/fig-3.svg' />
              </Flex>
              <Heading.h2 fontSize={[2, 3]} fontWeight={1}>Design</Heading.h2>
              <Text.p>Guidelines for styling Rimble components to fit your product's brand.</Text.p>
              <Link disabled mt={3} ml={5} href='#' target='_blank' rel='noopener'>Guide coming soon!</Link>
            </Box>
          </Flex>

          </Container>
        </section>



        <section>
          <Container>
            <Box my={5}>
              <Heading.h1 fontSize={[3, 4]}>Contribute to Rimble</Heading.h1>
              <Hr/>
              <Text.p>
                 Want to help us define the roadmap? Submit feedback or feature requests on our GitHub pages.
              </Text.p>
            </Box>
          </Container>
        </section>
      </main>
      <Footer/>
    </React.Fragment>
  </ThemeProvider>
)

export default Home
