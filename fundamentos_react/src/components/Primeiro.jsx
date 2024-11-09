import React from 'react'

const Primeiro = (props) => {
  return (
    <div>
        <h2>Situação do aluno: {props.aluno}</h2>
        <p>Nota:{props.nota}</p>
        {props.nota >= 7 && <p>Aprovado</p>}
        {props.nota >=4 && props.nota < 7 && <p>Recuperação</p>}
        {props.nota < 4 && <p>Reprovado</p>}
    </div>
  )
}

export default Primeiro