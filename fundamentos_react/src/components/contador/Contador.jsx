import React, { useState } from 'react'

const Contador = (props) => {

    const [numero, setNumero] = useState(props.NumeroInicial)
    const [passo, setPasso] = useState(props.NumeroPasso)
    

    function inc() {
        console.log(numero)
        if(numero >= 10){
            setNumero(1)
        }else{
            setNumero(numero + passo)
        }
    }

    function dec() {
        console.log(numero)
        if(numero <= 1){
            setNumero(10)
        }
        else{
            setNumero(numero - passo)
        }
    }

  return (
    <div>
        <h3>{numero}</h3>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}

export default Contador