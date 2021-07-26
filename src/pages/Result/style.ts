import styled from 'styled-components'

export const ConvertedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9022FF;
    font-weight: bold;
    height: 100%;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    flex-direction: column;
`
export const ConvertedContainerWrapper = styled.div`
    margin-bottom: 2%;
`

export const ButtonContainerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media(min-width: 1380px) {
        min-width: 10%;
    }

    @media(max-width: 1379px) {
        min-width: 15%;
    }
`