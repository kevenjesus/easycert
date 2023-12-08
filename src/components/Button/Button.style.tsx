import styled from "styled-components";

interface ButtonStyleTypes {
    loading?: boolean
}

export const ButtonStyle = styled.button<ButtonStyleTypes>`
    width: 100%;
    height: 53px;
    flex-shrink: 0;
    background: ${({loading})=> loading ? 'rgba(43, 52, 153, 0.50)' : '#2B3499'};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    color: #FFF;
    font-size: 15px;
    font-weight: 700;
`