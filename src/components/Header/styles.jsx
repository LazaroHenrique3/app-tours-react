import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.bg_terciary};
    padding: 1em 5em;
    transition: 0.4s;
`

export const LogoTitle = styled.h1`
    color: ${(props) => props.theme.font_primary};
    transition: 0.4s;
`;

export const ThemeSwitcher = styled.span`
    cursor: pointer;
    svg{
        color: ${(props) => props.theme.font_primary};
        font-size: 30px;
        transition: 0.4s;
    }
    svg:hover{
        font-size: 35px;
    }

`


