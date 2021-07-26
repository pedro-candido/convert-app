import { ButtonProps } from './index'
import styled from 'styled-components'

export const StyledButton = styled('button')<ButtonProps>`
    background-color: ${({isBackgroundPurple}) => !!isBackgroundPurple ? '#9022FF' : 'transparent' };
    color: ${({isBackgroundPurple}) => !!isBackgroundPurple ? '#fff' : '#9022FF'};
    font-size: 28px;
    padding: 10px;
    border: 2px solid #9022FF;
    border-radius: 5px;
    transition: .7s background-color, .7s color;

    &:hover {
        background-color: ${({isBackgroundPurple}) => !!isBackgroundPurple ? 'white' : '#9022FF' };
        color: ${({isBackgroundPurple}) => !!isBackgroundPurple ? '#9022FF' : 'white' };
        border: 2px solid #9022FF;
        transition: .4s background-color, .4s color;
        cursor: pointer;
    }
`