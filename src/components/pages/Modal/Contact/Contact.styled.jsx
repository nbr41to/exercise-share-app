import styled from 'styled-components'

const StyledComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    .close-button {
        float: right;
        width: 40px;
        height: 40px;
        font-size: 3.2rem;
        text-align: center;
    }
    .modal_box {
        background-color: white;
        width: 90%;
        /* height: 80vh; */
        padding: 1rem;
        .form {
            h2 {
                font-size: 1.8rem;
                font-weight: bold;
                padding: 2rem 0 1rem;
            }
            p {
                font-size: 1.6rem;
                padding: 1rem 0;
            }
            textarea {
                font-size: 1.6rem;
                width: 100%;
                height: 15rem;
                border: 1px solid #ccc;
                border-radius: 8px;
                padding: 10px;
            }

            .submit {
                display: block;
                background-color: #ccc;
                font-size: 1.8rem;
                font-weight: bold;
                padding: 1rem 2rem;
                border: 1px solid #444;
                border-radius: 5px;
                margin: 1rem auto;
                text-align: center;
            }
        }
    }
`

export default StyledComponent