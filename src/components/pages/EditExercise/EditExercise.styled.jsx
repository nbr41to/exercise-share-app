import styled from 'styled-components'

const StyledComponent = styled.div`
    padding: 12px;
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
                font-weight: bold;
                padding: 0.2rem;
                padding-left: 2rem;
                margin: 0.8rem;
                color: white;
                background-color: skyblue;
                border-radius: 999rem;
                box-shadow: 1px 1px 1px 0 #000;
                button {
                    color: white;
                    border-radius: 100%;
                    margin-left: 1rem;
                    svg {
                    font-size: 3.6rem;
                    }
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
`

export default StyledComponent;