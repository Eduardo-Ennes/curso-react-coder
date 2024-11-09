import React from 'react'
import Card from "./Card"
import { connect } from 'react-redux'

const Soma = (props) => {
  const min = parseInt(props.numero.min)
  const max = parseInt(props.numero.max)
  const soma = max + min
  return (
    <Card title="Soma dos Números" blue>
        <div className="intervalo">
            <span>
                <span>Resultado:</span>
                <strong>{soma}</strong>
            </span>
        </div>
    </Card>
  )
}

function mapStateToProps(state) {
  return{
    numero: state.numeros
  }
}


export default connect(mapStateToProps)(Soma)