import { ButtonProps } from './index'
import styled from 'styled-components'

export const StyledButton = styled('button')<ButtonProps>`
    background-color: ${({isBackgroundPurple}) => !!isBackgroundPurple ? 'purple' : 'transparent' };
    color: ${({isBackgroundPurple}) => !!isBackgroundPurple ? '#fff' : 'purple'};
    font-size: 28px;
    padding: 10px;
    border: 2px solid purple;
    border-radius: 5px;
    transition: .7s background-color, .7s color;

    &:hover {
        background-color: ${({isBackgroundPurple}) => !!isBackgroundPurple ? 'white' : 'purple' };
        color: ${({isBackgroundPurple}) => !!isBackgroundPurple ? 'purple' : 'white' };
        border: 2px solid purple;
        transition: .4s background-color, .4s color;
        cursor: pointer;
    }
`