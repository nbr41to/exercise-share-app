import React from 'react'
import { Link } from 'react-router-dom'
import { StyledComponents } from "./Menubar.styled"

import HomeIcon from '@material-ui/icons/Home';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';

const Header = ({ user, signout }) => {
    return (
        <StyledComponents>
            <ul>
                <li>
                    <Link to="/" >
                        <HomeIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/edit-exercise" >
                        <DirectionsRunIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/edit-profile" >
                        <PersonIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/contact" >
                        <MailIcon />
                    </Link>
                </li>
                <li>
                    <Link to="/info" >
                        <InfoIcon />
                    </Link>
                </li>
            </ul>
        </StyledComponents>
    )
}

export default Header