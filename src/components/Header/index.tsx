import { HeaderTab, Logo } from '../index'
import { Link } from 'react-router-dom'
import { StyledHeader, Nav } from './style'

export const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">
                <Logo />
            </Link>
            <Nav>
                <HeaderTab link="/convert" text="Converter"/>
                <HeaderTab link="/contact" text="Contato"/>
            </Nav>
        </StyledHeader>
    )
}