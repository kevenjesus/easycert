import styled, { css } from "styled-components";

interface InputStyleTypes {
    error?: boolean
}

export const InputStyle = styled.input<InputStyleTypes>`
    width: 100%;
    flex-shrink: 0;
    color: #000;
    background: rgba(255, 208, 153, 0.40);
    padding: 18px 13px;
    outline: none;
    /* border: 1px solid ${({error}) => error ? '#f00' : '#000'}; */
    ${({error}) => {
        if(error) {
            return css`
                border: 1px solid #f00;
            `
        }
    }}
    &::placeholder {
        color: #000;
    }
`

export const InputConatiner = styled.div`
    margin-bottom: 25px;
`

export const HelpText = styled.span`
    font-size: 12px;
    color: #F00;
    margin-top: 2px;
`