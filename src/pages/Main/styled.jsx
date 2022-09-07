import styled from "styled-components";
import * as colors from '../../config/colors';
export const Container = styled.div`
height: 100%;
.bg-top{
    /* width: 100%; */
    height: 650px;
    right: 0;
    top: 0;
    position: absolute;


    @media screen and (max-width: 810px){
        object-fit: cover;
        width: 35%;
        object-position: left top;
    }
}
.bg-bottom{
    height: 300px;
    left: 0;
    bottom: 0;
    position: absolute;
}

@media screen and (max-width: 810px){
    .desktop{
        display: none;
    }
}
`;

export const Title = styled.h1`
text-align: center;
padding-top:50px;
color: ${colors.grayishBlue};
`;

export const ToggleField = styled.div`
display: flex;
color: ${colors.lightGrayishBlue};
margin: 30px auto;
text-align: center;
align-items: center;
justify-content: center;
`;
export const CardCollection = styled.section`
position: relative;
z-index: 15;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

div:nth-child(even){
background: linear-gradient(${colors.linearA},${colors.linearB});
height: 380px;
color: ${colors.veryLightGrayishBlue};

h2{
    margin-top: 30px;
}
h3{
    color: ${colors.veryLightGrayishBlue};
}
button{
    background: ${colors.veryLightGrayishBlue};
    border: 1px solid ${colors.veryLightGrayishBlue};
    color: ${colors.grayishBlue};
    :hover{
        color: ${colors.veryLightGrayishBlue};
        background: ${colors.linearB};
    }
}

@media screen and (max-width: 1210px){
    height: 340px;
}

@media screen and (max-width: 1010px){
    height: 330px;
}
@media screen and (max-width: 910px){
    height: 300px;
}
}
@media screen and (max-width: 810px){
    flex-direction: column;
    
    
    div{
        width: 50%;
        margin-bottom: 10px;
    }

    div:nth-child(even){
        h2{
            margin-top: 20px;
        }
        height: auto;
    }
}

`;

