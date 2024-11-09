import React, { useState } from 'react'
import Mega from "./Mega"
import "./MegaCena.css"

const MegaCena = () => {
    const [numero, setNumero] = useState(0)
    const [Lista, setLista] = useState([])
    
    function Sortear() {
       setLista(Mega.Mega_Cena(numero))
       setNumero(0)
    }
    
  return (
    <div className='MegaCena'>
        <h1>Loteria</h1>
        <label>
            <span>Digite o número de jogos:</span>
            <input type="number" id="Jogos" onChange={e => setNumero(e.target.value)} value={numero}/>
            <button type='submit' onClick={Sortear}>Criar Jogos</button>
        </label>
        <ul>
            {Lista.map((n, i) => (
                <li key={i}><strong>Jogo{i + 1}</strong>:  {n[0]} - {n[1]} - {n[2]} - {n[3]} - {n[4]} - {n[5]} - {n[6]}</li>
            ))}
        </ul>
    </div>
  )
}

export default MegaCena