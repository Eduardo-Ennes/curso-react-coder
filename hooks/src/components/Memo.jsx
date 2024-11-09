import React, { useMemo, useState } from 'react'


/* 
O useMemo é um Hook do React que memoriza o resultado de uma função computada, evitando recalcular valores pesados ou caros em cada renderização, a menos que uma das suas dependências tenha mudado. Ele é utilizado para otimizar a performance, especialmente quando o cálculo ou operação é complexo e não deve ser refeito sem necessidade.
*/


function sum(n1, n2) {
  var num1 = parseInt(n1)
  var num2 = parseInt(n2)
  return num1 + num2
  
}

const Memo = () => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const result = useMemo(() => sum(value1, value2), [value1, value2])

  return (
    <div>
      <h1>useMemo</h1>
      <input type="number" value={value1} onChange={e => setValue1(e.target.value)}/>
      <input type="number" value={value2} onChange={e => setValue2(e.target.value)}/>
      <h3>Reultado da soma: {result}</h3>
    </div>
  )
}

export default Memo