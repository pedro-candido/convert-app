import styled from 'styled-components';

export const LabelStyled = styled.label`
    color: #9022FF;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-bottom: 5%;
`

export const InputStyled = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #9022FF;
    color: #9022FF;
    margin-bottom: 5%;
    transition: all .5s;

    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
        appearance: none;
    }

    &:hover {
        transition: all .5s;
        box-shadow: 0px 0px 2px #9022FF;
    }

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #9022FF;
        transition: all .5s;

    }
`

export const ConvertBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
    max-width: 200px;
    width: 100%;
    margin: 5% auto;
`

export const ButtonStyled = styled.button`
    padding: 10px;
    color: #fff;
    background-color: #9022FF;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid transparent;
    transition: .4s all;

    &:hover { 
        background-color: #fff;
        color: #9022FF;
        border: 2px solid #9022FF;
        transition: .4s all;
        cursor: pointer;
    }
`