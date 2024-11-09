import "./Intervalo.css";
import React from 'react';
import Card from "./Card";
import { connect } from "react-redux";

const Media = (props) => {
  const min = parseInt(props.min)
  const max = parseInt(props.max)
  const media = (max + min) / 2

  return (
    <Card title="Média dos Números" green>
        <div className="intervalo">
            <span>
                <span>Resultado:</span>
                <strong>{media}</strong>
            </span>
        </div>
    </Card>
  );
};

// Corrigindo o nome da função para "mapStateToProps"
function mapStateToProps(state) {
    return {
      min: state.numeros.min,
      max: state.numeros.max
    };
}

export default connect(mapStateToProps)(Media);