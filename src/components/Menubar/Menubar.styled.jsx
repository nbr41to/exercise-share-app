import styled from 'styled-components'

export const StyledComponents = styled.nav`
    width: 100vw;
    background-color: limegreen;
    position: fixed;
    bottom: 0;
    z-index: 10;
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        li {
            width: 100%;
            a {
                display: block;
                text-align: center;
                color: white;
                svg {
                    font-size: 4rem;
                }
            }
        }
    }



`