import React from 'react'
import { NavLink } from 'react-router-dom'
import create from '../imgs/add.png'
import userContext from '../UserContext'

const Header = () => {
  const {setCreate} = React.useContext(userContext)
  return (
    <header style={{display: 'flex',width: 'calc(100vw - 60px)',padding: '0px 30px',backgroundColor: 'rgb(86, 17, 133)',height: '80px',gap: '48px',justifyContent: window.innerWidth < 480 ? 'center' : 'spaceBetween',alignItems: 'center'}}>
      <div style={{display: 'flex',width: 'calc(100vw - 60px)',gap: '48px',alignItems: 'center'}}>
        <NavLink to={''}><h1 style={{textDecoration: 'none'}}>logo</h1></NavLink>
        <NavLink to={''}><h3 style={{textDecoration: 'none',fontFamily: 'Open Sans',textTransform: 'uppercase'}}>Histórias</h3></NavLink>
        <NavLink to={''}><h3 style={{textDecoration: 'none',fontFamily: 'Open Sans',textTransform: 'uppercase'}}>Personagens</h3></NavLink>
      </div>
       {window.innerWidth > 480 && <div className='divHover'>
       <NavLink onClick={() => setCreate(null)} style={{display: 'flex',alignItems: 'center',gap: '6px'}} to={'/Create'}>
        <h3 style={{textDecoration: 'none',fontFamily: 'Open Sans',textTransform: 'uppercase',fontSize: '20px'}}>CRIAR</h3>
        <img src={create} style={{maxWidth: '32px',filter: 'invert(1)'}} />
        </NavLink>
        </div>} 
    </header>
  )
}

export default Header