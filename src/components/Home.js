import React from 'react'
import ideia from '../imgs/undraw_electricity_k2ft.svg'
import '../App.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import userContext from '../UserContext';
const Button = styled.button`
background-color: #080808;
color: white;
border: none;
padding: 15px 50px;
border-radius: 5px;
font-size: 1.4rem;
cursor: pointer;
margin-top: 20px;
max-width: 300px;
transition: 0.9s;
&:hover {
    background-color: #561185;
    -webkit-box-shadow: 0px 10px 71px 12px #190a24;
-moz-box-shadow: 0px 10px 71px 12px #190a24;
box-shadow: 0px 10px 71px 12px #190a24;
}
`
const ButtonTwo = styled.button`
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
    -webkit-box-shadow: 0px 10px 71px 12px #561185;
-moz-box-shadow: 0px 10px 71px 12px #561185;
box-shadow: 0px 10px 71px 12px #561185;
}
`
const Home = () => {
  const {mobile} = React.useContext(userContext)
  const styles = {
    divnotMobile: {textAlign: 'center',paddingTop: '16px',display: 'grid',gridTemplateColumns: '6fr 4fr'}
  }
  return (
    <div>
      <Header />
    <div className='containerHome' style={window.innerWidth > 480 ? styles.divnotMobile : {display: 'flex',flexDirection: 'column-reverse',paddingTop: '32px'}}>
      <div style={window.innerWidth > 480 ? {marginTop: '76px'} : {}}>
    <h1 style={{fontFamily: 'Open Sans',color: '#561185',textTransform: 'uppercase'}}>Onde suas Ideias se tornam Realidade</h1>
    <p style={{fontSize: '19px',maxWidth: '80%',margin: '0 auto',fontWeight: '500'}}>Dê vida aos seus personagens e histórias de forma fácil e rápida, ou veja as criações de outras pessoas</p>
    <div style={{display: 'flex',gap: '20px',justifyContent: 'center',alignItems: 'center',marginTop: window.innerWidth > 480 ? '128px' : ''}}>
    <NavLink to={'/View'}><ButtonTwo>Veja inspirações</ButtonTwo></NavLink>
    <NavLink to={'/Create'}><Button>Crie Agora!</Button></NavLink>
    </div>
      </div>
      <div>
    <img className='imgdec' src={ideia} alt="" style={{maxWidth: '420px',order: '10',display: 'flex'}}/> 

      </div>
    <br />
   </div>
    </div>
  )
}

export default Home