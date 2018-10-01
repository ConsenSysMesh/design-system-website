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

import ReactSVG from 'react-svg'

import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
} from 'styled-system'

const css = props => props.css
const themed = key => props => props.theme[key]

export const Box = styled('div')(
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  themed('Box'),
  css
)

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
}

export const Flex = styled(Box)({
  display: 'flex'
},
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed('Flex')
)

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
}

const Masthead = styled.section`
  position: relative;
  height: calc(100vmax/7*2.5);
  width: 100%;
  margin-top: 64px;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  background: #F2F4F7;
  overflow: hidden;
`

// const BgGridFigure = styled.div`
//   display: grid;
//   grid: repeat(7, calc(100vmax/7)) / repeat(7, calc(100vmax/7));
//   width: 100%;
//   height: 100%;
//   ${'' /* overflow: hidden; */}
//   position: absolute;
//   top: 0;
//   z-index: 0;
//   ${'' /* opacity: 0.5; */}
//
//   transform: translateY(calc(-100vmax/7*0.5));
//
//   > .box {
//     background: linear-gradient(135deg, #F2F4F7 50%, #FFF 50%);
//   }
// `

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

          {/* masthead section */}
          <Container>
            <Header/>
          </Container>
        </Masthead>
        <section>
          <Container>
            <Box my={5}>
              <Heading.h1>Our Approach</Heading.h1>
              <hr/>
              <Flex my={4} width={1}>
                <Box width={[1, 1/3]} mr={4}>
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-1.svg' />
                  </Flex>
                  <h1>Flexible</h1>
                  <p>We aim to impose as few constraints as possible. We’re here to build a system that can handle rapid change without disruption. </p>
                </Box>
                <Box width={[1, 1/3]} mr={4}>
                  <Flex my={3}>
                    <ReactSVG src='static/svg/fig-2.svg' />
                  </Flex>
                  <h1>Tested</h1>
                  <p>We get to know the builders and users of Web3. We test with the people who use our tools.  </p>
                </Box>
                <Box width={[1, 1/3]} >
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
              <hr/>

              <Heading.h3>Installation</Heading.h3>
              <CodeBlock code={'$ npm install literate-sniffle'} />

              <Heading.h3>Usage</Heading.h3>
              <CodeBlock code={exampleCode} />
            </Box>
          </Container>
        </section>
      </main>
      <Footer/>
    </div>
  </ThemeProvider>
)

export default Home
