import React, { useEffect } from 'react'
import ideia from '../imgs/undraw_electricity_k2ft.svg'
import '../App.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import userContext from '../UserContext';
import Buttons from './Button';

const Home = () => {
  const {Button, ButtonTwo} = Buttons
  const {mobile,setCreate} = React.useContext(userContext)
  const styles = {
    divnotMobile: {textAlign: 'center',paddingTop: '16px',display: 'grid',gridTemplateColumns: '6fr 4fr'}
  }
  useEffect(() => {
    setCreate(null)
  }, [])
  return (
    <div>
      <Header />
    <div className='containerHome' style={window.innerWidth > 480 ? styles.divnotMobile : {display: 'flex',flexDirection: 'column-reverse',paddingTop: '32px'}}>
      <div style={window.innerWidth > 480 ? {marginTop: '76px'} : {}}>
    <h1 style={{fontFamily: 'Open Sans',color: '#561185',textTransform: 'uppercase'}}>Onde suas Ideias se tornam Realidade</h1>
    <p style={{fontSize: '19px',maxWidth: '80%',margin: '0 auto',fontWeight: '500'}}>Dê vida aos seus personagens e histórias de forma fácil e rápida, ou veja as criações de outras pessoas</p>
    <div style={{display: 'flex',gap: '20px',justifyContent: 'center',alignItems: 'center',marginTop: window.innerWidth > 480 ? '128px' : ''}}>
    <NavLink to={'/View'}><Button>Veja inspirações</Button></NavLink>
    <NavLink to={'/Create'}><ButtonTwo>Crie Agora!</ButtonTwo></NavLink>
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