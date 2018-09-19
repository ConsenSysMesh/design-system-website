import styled from 'styled-components'

// body size + 6 headings
const Text = styled.div`
  color: inherit;
  font-size: 1rem;
  font-style: normal;
`

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

const Heading = Text.withComponent('h3')

Heading.h1 = styled( Heading.withComponent('h1') )`
  font-size: ${props => props.theme.fontSizes[6] + 'px'} ;
`
Heading.h2 = Heading.withComponent('h2')
Heading.h3 = Heading.withComponent('h3')
Heading.h4 = Heading.withComponent('h4')
Heading.h5 = Heading.withComponent('h5')
Heading.h6 = Heading.withComponent('h6')


export default Heading
