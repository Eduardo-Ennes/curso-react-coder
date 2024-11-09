import React from 'react'

const IndiretaFilho = (props) => {
  return (
    <div>
        <button onClick={e => props.Clicar("Portugal", "Lisboa", "Pastel de belém")}>Enviar informações</button>
    </div>
  )
}

export default IndiretaFilho