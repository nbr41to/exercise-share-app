import styled from 'styled-components'

const StyledComponent = styled.div`
    padding: 12px;
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

`

export default StyledComponent