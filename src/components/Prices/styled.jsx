import styled from "styled-components";
import * as colors from '../../config/colors'

export const Section = styled.section`
display:flex;
align-items: center;
justify-content: center;
`;

export const Card = styled.div`
display: flex;
text-align: center;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 20%;
background: #fff;
padding: 10px;
border-radius:8px;
color: ${colors.grayishBlue};
box-shadow: 0 0 1em #ccc;

h2{
    margin: 20px 0;
    font-size: 1.3em;
}

h3{
    color: ${colors.darkGrayishBlue};
    font-size: 3.5em;
}

ul{
    width: 90%;
    margin: 20px 0;
    li{
        :first-child{
            border-top: 1px solid ${colors.lightGrayishBlue};
        }
        list-style: none;
        padding: 10px 0;
        border-bottom: 1px solid ${colors.lightGrayishBlue};
        border-collapse: collapse;
        border-width: 100%;
        border-spacing: 0px;
    }
}

button{
padding: 10px 70px;
font-family: 'Montserrat', sans-serif;
color: ${colors.veryLightGrayishBlue};
background: ${colors.linearB};
border: 1px solid ${colors.linearB};
border-radius: 4px;

:hover{
    background: ${colors.veryLightGrayishBlue};
    color: ${colors.grayishBlue};
}
}

@media screen and (max-width: 1210px){
    h2{
    margin: 10px 0;
    font-size: 1em;
    }
    h3{
        font-size: 3em;
    }


    button{
        padding: 5px 50px;
    }
}

@media screen and (max-width: 1010px){
    h3{
        font-size: 2.5em;
    }


    button{
        padding: 5px 40px;
    }
}
@media screen and (max-width: 910px){
    h2{
        font-size: 0.8em;
    }

    h3{
        font-size: 2em;
    }

    li{
        font-size: 0.8em;
    }


    button{
        padding: 5px 30px;
    }
}

@media screen and (max-width: 810px){
    h2{
        margin-top: 20px;
        font-size: 1em;
    }

    h3{
        font-size: 3em;
    }

    ul{
        margin: 30px 0;
        li{
        font-size: 1em;
        }
    }


    button{
        padding: 10px 70px;
        margin-bottom: 20px;
    }
}
@media screen and (max-width: 485px){
    h2{
        margin-top: 15px;
        font-size: 0.8em;
    }

    h3{
        font-size: 2.5em;
    }

    ul{
        margin: 25px 0;
        li{
        font-size: 0.8em;
        }
    }


    button{
        padding: 10px 50px;
        margin-bottom: 20px;
    }
}
@media screen and (max-width: 405px){
   
    h3{
        font-size: 2.2em;
    }

    ul{
        margin: 25px 0;
        li{
        font-size: 0.8em;
        }
    }


    button{
        padding: 10px 25px;
        margin-bottom: 20px;
    }
}

`;