import styled from 'styled-components'

const StyledComponent = styled.div`
    padding: 12px;
    h2 {
        font-size: 1.8rem;
        font-weight: bold;
        padding: 2rem 0 1rem;
        /* border-bottom: 1px solid #444; */
    }
    p {
        font-size: 1.6rem;
        font-weight: bold;
        margin: 1rem;

    }
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 100%;
        margin: 1rem;
    }
    .uplord-button {
        height: 20px;
        margin: 1rem;
    }

    .name-input {
        border: 1px solid #444;
        border-radius: 0.5rem;
        font-size: 1.6rem;
        padding: 0.5rem;
        margin: 1rem;
    }
    .finish-button {
        background-color: #ccc;
        font-size: 1.2rem;
        padding: 0.7rem 1rem;
        border: 1px solid #444;
        border-radius: 5px;
        margin: 1rem;
    }

`

export default StyledComponent;