import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Buttons from '../Button';
import Header from '../Header';
const Admin = () => {
  let [reset,setReset] = useState(false)
  var [expandido,setExpandido] = useState(false)
  const CharProve = (props) => {
    const Division = () => {
      return <div style={{margin: '6px auto',height: '2px',background: 'rgba(0,0,0,.2)',borderRadius: '25px',width: '100%',borderRadius: '25px'}}></div>
    }
    console.log(props.item.Desc.length)
    function RecusarChar(item) {
      console.log(item)
      axios.delete(`https://apifor-nave.onrender.com/deletechars/${props.item._id}`)
      setTimeout(() => {
        setReset(!reset)
      }, 30);
    }
    
    function AprovarChar(item) {
      axios.post('https://apifor-nave.onrender.com/aprovedChar',{
        Nome: props.item.Nome,
        Desc: props.item.Desc,
        Aparencia: props.item.Aparencia,
        Poder: props.item.Poder,
        Autoria: props.item.Autoria
      })
      setTimeout(() => {
        setReset(!reset)
      }, 30);
    }
    return (
      <div>
      <div style={{transition: '0s',width: '348px',position: 'relative',height: '240px',background: '#141414',borderRadius: !expandido ? '25px' : '25px 25px 0px 0px',color: 'white',display: 'flex',flexDirection: 'column',alignItems: 'center',padding: '10px 12px'}}>
       <div style={{position: 'relative',height: '240px',background: '#141414',borderRadius: '25px',color: 'white',display: 'flex',flexDirection: 'column',alignItems: 'center'}}> 
        <h2>{props.item.Nome}</h2>
        <p style={{textOverflow: 'ellipsis',margin: '0 auto',maxWidth: '300px',overflow: 'hidden',whiteSpace: 'nowrap'}}>{props.item.Desc}</p>
        {props.item.Desc.length < 50 && <p style={{maxHeight: '100px'}}>{props.item.Aparencia}</p>}
        <h3 style={{position: 'absolute',bottom: '0px',maxHeight: '30px',overflowY: 'hidden'}}>{props.item.Autoria}</h3>
       </div>
       <div style={{display: 'flex',gap: '12px'}}>
        <Buttons.Button onClick={() => {RecusarChar(props.item)}} style={{fontSize: '20px',padding: '5px 10px',background: '#d64541',color: 'white'}}>Recusar</Buttons.Button>
        <Buttons.Button onClick={() => {AprovarChar(props.item)}} style={{fontSize: '20px',padding: '5px 10px',background: '#93faa5',color: 'black'}}>Aprovar</Buttons.Button>
       </div>
       <Buttons.Button onClick={() => setExpandido(!expandido)} style={{fontSize: '24px',padding: '5px 24px',background: '#f8f8f8',color: 'black'}}>Visualizar</Buttons.Button>
      </div>
      {expandido && <div style={{background: '#e7e7e7',width: '332px',padding: '10px 20px',borderRadius: '0px 0px 25px 25px'}}>
        <h2>Nome</h2>
        <p style={{fontSize: '18px',maxHeight: '100px',overflowY: 'hidden'}}>{props.item.Nome}</p>
        <Division />
        <h2>Descrição</h2>
        <p style={{fontSize: '18px',maxHeight: '100px',overflowY: 'hidden'}}>{props.item.Desc}</p>
        <Division />
        <h2>Aparência</h2>
        <p style={{fontSize: '18px',maxHeight: '100px',overflowY: 'hidden'}}>{props.item.Aparencia}</p>
        <Division />
        <h2>Poder</h2>
        <p style={{fontSize: '18px',maxHeight: '100px',overflowY: 'hidden'}}>{props.item.Poder}</p>
        <Division />
        <h2>Autoria</h2>
        <p style={{fontSize: '18px',maxHeight: '100px',overflowY: 'hidden'}}>{props.item.Autoria}</p>
        <Division />
        </div>}
      </div>
    )
  }
  let [senha,setSenha] = useState('')
  let chars = [];
  let [uniqueDB,setUDB] = useState(null);
  useEffect(() => {
    let db = [];
    fetch('https://apifor-nave.onrender.com/char').then(Response => Response.json().then(Data => {
    Data.forEach(element => {
      db.push(element)
    });  
      setUDB([... new Set(db.map(item => JSON.stringify(item)))].map(item => JSON.parse(item)))
      console.log(uniqueDB)
    }))
  },[reset])
  useEffect(() => {
    const interval = setInterval(() => {
          let db = [];
    fetch('https://apifor-nave.onrender.com/char').then(Response => Response.json().then(Data => {
    Data.forEach(element => {
      db.push(element)
    });  
    if (!expandido){
      setUDB([... new Set(db.map(item => JSON.stringify(item)))].map(item => JSON.parse(item)))
      console.log(uniqueDB)
    }
    }))
    }, 5000);
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {senha !== 'JAMV' && <div style={{width: '100vw',height: '100vh',display: 'grid',placeContent: 'center',placeItems: 'center'}}>
      <h1>Insira a Senha</h1>
      <input style={{fontSize: '32px',padding: '5px 20px'}} type={'password'} value={senha} onChange={(e) => setSenha(e.target.value)}/>
        </div>}
    {senha === 'JAMV' && <div>
      <Header />
      {uniqueDB && <h1 style={{margin: '0 auto',width: 'fit-content',marginTop: '20px'}}>{uniqueDB.length} Resultados</h1>}
      <div style={{display: 'flex',flexDirection: 'column',gap: '20px',width: '100vw',alignItems: 'center',marginTop: '48px'}}>
      {uniqueDB && uniqueDB.map(item => (
        <div key={item._id}>
          <CharProve item={item} />
        </div>
      ))}
      {!uniqueDB && <h1>Carregando...</h1>}
      {!uniqueDB && <p>Se demorar muito, pode ser que tenha ocorrido o erro, por favor, reporte aos desenvolvedores.</p>}
      </div>
    </div>}
      </div>
  )
}

export default Admin