import styled from "styled-components"
const Buttons = {

Button: styled.button`
background-color: #f8f8f8;
color: black;
border: 1px solid transparent;
transition: 0.9s;
/* border: 2px solid #561185; */
padding: 15px 50px;
border-radius: 5px;
font-size: 1.4rem;
cursor: pointer;
margin-top: 20px;
max-width: 300px;
&:hover {
    /* background-color: #561185; */
border: 1px solid rgba(0,0,0,.2);
/* -webkit-box-shadow: 0px 10px 71px 12px #561185; */
/* -moz-box-shadow: 0px 10px 71px 12px #561185; */
/* box-shadow: 0px 10px 71px 12px #561185; */
}
`
,
ButtonTwo: styled.button`
background-color: #080808;
color: white;
border: none;
padding: 15px 50px;
border-radius: 5px;
font-size: 1.4rem;
text-align: center;
cursor: pointer;
margin-top: 20px;
max-width: 300px;
transition: 0.9s;
outline: 2px solid rgba(0,0,0,.0);
&:hover {
    outline: 2px solid rgba(0,0,0,.9);
    background-color: #561185;
    /* -webkit-box-shadow: 0px 10px 71px 12px #190a24; */
/* -moz-box-shadow: 0px 10px 71px 12px #190a24; */
/* box-shadow: 0px 10px 71px 12px #190a24; */
}
`
}

export default Buttons
