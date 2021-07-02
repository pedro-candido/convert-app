import { Link } from 'react-router-dom'
import { darken } from 'polished'
import styled from 'styled-components'

export const Navigate = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 28px;
    margin-right: 10%;
    font-family: 'Roboto';
    padding: 10px;
    border-radius: 10px;
    transition: .2s all;

    &:hover {
        color: purple;
        transition: .2s all;
        background-color: #fff;
        transform: scale(1.1);
    }
`