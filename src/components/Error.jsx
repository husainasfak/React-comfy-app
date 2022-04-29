import React from 'react'
import styled from 'styled-components'
const Error = () => {
  return <Wrapper>
    <div className="section section-center text-center">
    <h4>Something went wrong...</h4>
  </div>
  </Wrapper>
}

export default Error;

const Wrapper = styled.div`
  h4{
    color:#C10000
  }
`