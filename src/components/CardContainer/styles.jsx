import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    margin-top: 2em;
    margin-bottom: 2em;
    border-bottom: solid 4px ${(props) => props.theme.font_secondary};
    color: ${(props) => props.theme.font_primary};
    transition: 0.4s;
`

export const ReloadButton = styled.button`
    padding: 1em 3em;
    border-radius: 5px;
    font-size: 16px;
    background-color: transparent;
    font-weight: bold;
    color: ${(props) => props.theme.font_secondary};
    border: 2px solid ${(props) => props.theme.font_secondary};
    transition: 0.4s;

    &:hover{
        color: #FFF;
        background-color: ${(props) => props.theme.font_secondary};
    }
`

