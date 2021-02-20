import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

function SubTitle(props) {
  return <h2>{props.children}</h2>
}

export default function Home() {
  return (
    <>
      <Title>Hello World</Title>
      <SubTitle>Hello!</SubTitle>
    </>
  )
}
