import React, { useState } from 'react'

const Char = () => {
    const [Nome,setNome] = useState('Novo personagem')
  return (
    <>
    {window.innerWidth > 480 && <div style={{padding: '24px'}}>
        <input style={{border: 'none',background: 'transparent',fontWeight: 'bold',fontSize: '32px'}} type={'text'} value={Nome} onChange={(e) => setNome(e.target.value)} onFocus={(e) => {if (Nome === 'Novo Personagem') {setNome('')}}} onBlur={() => {if (Nome === ''){setNome('Novo Personagem')} }}/>
        {Nome === 'Novo personagem' && <p style={{FontSize: '12px'}}>Clique para mudar o nome</p>}
        Nome,Descrição,aparência,poderes,em textareas
    </div>}
    </>
  )
}

export default Char