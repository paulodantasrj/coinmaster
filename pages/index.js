import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const index = ({ data }) => {
  console.log(data)
  return <div>{JSON.stringify(data.results)}</div>
}

export default index

export async function getStaticProps() {
  const base_url = 'api.hgbrasil.com/'

  const res = await fetch(
    'https://api.hgbrasil.com/finance/stock_price?key=d8c48b4e&symbol=get-low'
  )
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
