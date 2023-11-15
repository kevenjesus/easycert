import styled from "styled-components";

const Title = styled.h1`
    color: #000;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
   

`
Title.defaultProps = {
        children: 'Easy Cert'
}
export default Title