import React from 'react'
import { StyledComponents } from "./Header.styled"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = ({ user, signout }) => {
    return (
        <StyledComponents>
            {user &&
                <button onClick={signout}>
                    <ExitToAppIcon />
                    <p>Logout</p>
                </button>}
            <h1>Exercise Share App</h1>
        </StyledComponents>
    )
}

export default Header