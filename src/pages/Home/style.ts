import styled from 'styled-components'

export const Container = styled('div')`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    margin: 0 auto;
`

export const HomeImg = styled('img')`
    width: 70%;
    max-width: 440px;
    display: flex;
    justify-content: center;

    @media(min-width: 1380px) {
        max-width: 640px;
        width: 90%;
    }
`

export const ButtonContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    max-width: 200px;
    margin: 0 auto;
`

export const ImageContainer = styled('div')`
    display: flex;
    justify-content: center;
    image-rendering: optimizeSpeed;
`