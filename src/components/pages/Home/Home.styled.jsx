import styled from 'styled-components'

const StyledComponent = styled.div`
    .top-msg {
        font-size:2.0rem;
        font-weight: bold;
        text-align: center;
        padding: 1rem
    }
    .user-info {
        font-size: 1.4rem;
        text-align: right;
        padding: 1rem
    }
    .user-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
        button {
            background-color: darkblue;
            border: 1px solid #444;
            border-radius: 1rem;
            padding: 0.5rem 1rem;

            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 1rem;

            svg {
                font-size: 3.8rem;
                color: white;
            }
        }
    }
`

export default StyledComponent; 
