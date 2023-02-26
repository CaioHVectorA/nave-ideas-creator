import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header style={{display: 'flex',width: 'calc(100vw - 60px)',padding: '0px 30px',backgroundColor: 'rgb(86, 17, 133)',height: '80px',gap: '48px',justifyContent: window.innerWidth < 480 ? 'center' : '',alignItems: 'center'}}>
        <NavLink to={''}><h1 style={{textDecoration: 'none'}}>logo</h1></NavLink>
        <NavLink to={''}><h3 style={{textDecoration: 'none',fontFamily: 'Open Sans',textTransform: 'uppercase'}}>Histórias</h3></NavLink>
        <NavLink to={''}><h3 style={{textDecoration: 'none',fontFamily: 'Open Sans',textTransform: 'uppercase'}}>Personagens</h3></NavLink>
    </header>
  )
}

export default Header