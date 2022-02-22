import styled from "styled-components";


export const Card = styled.div`
    border: 1px solid black;
    width: 300px;
    height: 300px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    h1 {
        font-weight: bold;
        margin: 0;
    }

    h2 {
        font-size: 1.8rem;
        font-weight: bold;
        margin: 0;
    }

    p {
        width: 100%;
        padding: 1rem;
        font-size: 1.5rem;
        text-align: center;
    }

`;