import styled from 'styled-components'

const StyledSignupModal = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: rgba(200, 200, 200, 0.8);
    .modal_box {
        width: 80%;
        background-color: #fff;
        padding: 15px;
        border-radius: 15px;
        h1 {
            font-size: 2.2rem;
            text-align: center;
        }
        form {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            p {
                font-size: 1.6rem;
                margin: 5px;
            }
            button {
                margin: 5px;
            }
        }
    }
`

export default StyledSignupModal;

