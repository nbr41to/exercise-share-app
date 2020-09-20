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
        width: 80%;
        /* height: 80vh; */
        padding: 1rem;
        h2 {
            font-size: 1.8rem;
            font-weight: bold;
            padding: 2rem 0 1rem;
            /* border-bottom: 1px solid #444; */
        }
        .exercises {
            p {
                font-size: 1.2rem;
                padding: 1rem 0;
                text-align: right;
            }
            ul {
                display: flex;
                flex-wrap: wrap;
                li {
                    width: auto;
                    font-size: 1.6rem;
                    padding: 0.5rem;
                    padding-left: 2rem;
                    margin: 0.8rem;
                    background-color: #ccc;
                    border-radius: 999rem;
                    box-shadow: 1px 1px 1px 0 #000;
                    button {
                        color: white;
                        font-size: 2.2rem;
                        background-color: black;
                        border-radius: 100%;
                        padding: 0.5rem 1rem;
                        margin-left: 1rem;
                    }
                }
            }
            input {
                border: 1px solid #444;
                border-radius: 0.5rem;
                font-size: 1.6rem;
                padding: 0.5rem;
                margin: 1rem 0.5rem;
            }
            .add-button {
                /* display: block; */
                background-color: #ccc;
                font-size: 1.2rem;
                padding: 0.7rem 1rem;
                border: 1px solid #444;
                border-radius: 5px;
                margin: 1rem 0;
            }
        }
    }
`

export default StyledComponent;