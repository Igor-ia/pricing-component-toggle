import styled, { createGlobalStyle } from "styled-components";
import * as colors from '../config/colors'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}


body,html,#root{
    height: 100%;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    background-color: ${colors.veryLightGrayishBlue};
}

`;


