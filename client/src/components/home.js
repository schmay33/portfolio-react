import React from 'react'
import { Container } from 'react-bootstrap'
import PictureOfMe from './picture'

function Home() {
    return (
        <Container>
            <h1 className='bold'>Hello, I'm Nathan Schmidt</h1>
            <h4>Web Developer, OnBase Developer</h4>
            <PictureOfMe height="300" width="300" id="mainPictureOfMe"></PictureOfMe>
        </Container>
    )
}

export default Home
