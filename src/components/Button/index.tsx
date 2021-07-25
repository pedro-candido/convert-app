import { ReactNode } from "react"
import { StyledButton } from './style'
import { useHistory } from "react-router-dom"

export interface ButtonProps {
    children: ReactNode;
    isBackgroundPurple?: boolean;
    path: string;
    currency: string;
}


export const Button = ({ children, isBackgroundPurple, path, currency }: ButtonProps ) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(path)
    }

    return (
        <StyledButton 
            onClick={handleClick} 
            isBackgroundPurple={ isBackgroundPurple }
            path={path}
            currency={currency}
        >
            { children }
        </StyledButton>
    )
}

/* useHistory possui push */