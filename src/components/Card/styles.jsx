import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    max-width: 600px;
    width: 60%;
    height: auto;
    margin-bottom: 4em;
    background-color: ${(props) => props.theme.bg_terciary};
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media(max-width: 745px){
        width: 80%;
    }
`

export const CardImg = styled.img`
    width: 100%;
    height: 400px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
`

export const CardTitle = styled.h3`
    font-size: 16px;
    font-weight: bold;
`

export const CardInfoPrice = styled.span`
    background-color: ${(props) => props.theme.bg_secondary};
    color: ${(props) => props.theme.font_secondary};
    font-weight: bold;
    padding: 2px 7px;
    border-radius: 5px;
    margin-left: 2px;
`

export const CardInfo = styled.div`
    padding: 1em 3em;
`

export const DeleteButton = styled.button`
    background-color: ${(props) => props.theme.btn_primary_bg};
    padding: 0.5em 7em;
    display: flex;
    justify-content: center;
    border: solid 1px ${(props) => props.theme.btn_primary};
    color: white;
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 1em;
    border-radius: 5px;
    width: 50%;
    cursor: pointer;
    transition: 0.4s;

    &:hover{
        background-color: ${(props) => props.theme.btn_primary_hover};
        border: solid 1px ${(props) => props.theme.btn_primary_hover};
    }
`

export const readMoreButton = styled.button`
    border: none;
    background: transparent;
    color: ${(props) => props.theme.font_secondary};
    font-size: 18px;
    margin-left: 5px;
    cursor: pointer;
`

