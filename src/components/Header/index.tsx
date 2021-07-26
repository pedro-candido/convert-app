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
                <HeaderTab link="/convert/USD" text="Dolar"/>
                <HeaderTab link="/convert/EUR" text="Euro"/>
            </Nav>
        </StyledHeader>
    )
}