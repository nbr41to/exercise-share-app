import styled from 'styled-components'

const StyledButton = styled.button`
    position: fixed;
    bottom: 70px;
    right: 20px;
    z-index: 15;
    background-color: ${props => props.color};
    opacity: 0.9;
    border-radius: 100%;
    cursor: pointer;
    padding: 12px;
    box-shadow: 2px 2px 2px black;
    svg {
        color: #fff;
        font-size: 3.2rem;
    }
`

export default StyledButton; 