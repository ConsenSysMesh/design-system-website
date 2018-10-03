import styled from 'styled-components'

const Hr = styled.hr`
  width: 3rem;
  height: .25rem;
  background: ${props => props.theme.colors.primary};
  display: block;
  margin: 12px 0 2rem;
  border: none;
`

export default Hr
