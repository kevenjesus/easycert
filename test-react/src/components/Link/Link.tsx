import styled from "styled-components";

const Link = styled.span`
    color: #0029FF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: start;
    display: flex;
    align-self: flex-start;
    padding-left: 2rem;

`

Link.defaultProps = {
    children: 'Esqueceu a senha?'
}
export default Link