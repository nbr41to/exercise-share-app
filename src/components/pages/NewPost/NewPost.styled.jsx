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
                    /* background-color: white; */
                    border-radius: 100%;
                    margin-left: 1rem;
                    svg {
                        font-size: 3.6rem;
                    }
                }
            }
        }
    }
    
    .new-post {
        ul {
            min-height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: white;
            box-shadow: 1px 1px 2px 0;
            padding-bottom: 1rem;
            h2 {
                width: 100%;
                font-size: 1.4rem;
                font-weight: bold;
                text-align: center;
                padding: 0.5rem 1rem;
                /* border: 1px solid #444; */
                background-color: limegreen;
                color: white;
            }
            li {
                font-size: 1.4rem;
                margin: 0.5rem 1rem;
                &:before {
                    content: '＊';
                    margin-right: 5px;
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
        .post-button {
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

export default StyledComponent