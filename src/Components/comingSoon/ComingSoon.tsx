import styled from '@emotion/styled'
import React from 'react'

export default function ComingSoon() {
  return (
    <Wrapper>
        <div>
            <img src="/assets/logo.png"  alt="logo" />
            <h3>Coming Soon</h3>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled('div')`
height: 70vh;
width:100%;
display: flex;
align-items: center;
justify-content: center;
img{
    height: 11rem;
    width: 11rem;
}

`