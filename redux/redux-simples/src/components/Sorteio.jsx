import React from 'react'
import Card from "./Card"
import { connect } from 'react-redux'


const Sorteio = (props) => {
  const aleatotio = parseInt(Math.random() * (props.max - props.min)) + props.min
  return (
    <Card title="Soma dos Números" purple>
        <div className="intervalo">
            <span>
                <span>Resultado:</span>
                <strong>{aleatotio}</strong>
            </span>
        </div>
    </Card>
  )
}

function mapStateToProps(state){
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}


export default connect(mapStateToProps)(Sorteio)