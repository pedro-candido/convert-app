import { Navigate } from './style'

interface HeaderTabProps {
    text: string,
    link: string
}

export const HeaderTab = ({text, link}: HeaderTabProps) => {
    return (
        <Navigate to={link}>
            { text }
        </Navigate>
    )
}