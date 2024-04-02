import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;

    width: 220px;
    height: 44px;

    background-color: black;
    border-radius: 5px;
    color: white;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 3px solid transparent;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        border: 3px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 3px solid black;

    &:hover{
        background-color: black;
        border: 3px solid transparent;
        color: white;
    }
`;