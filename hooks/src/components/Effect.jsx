import React, { useEffect, useState } from 'react'

/*  
O useEffect é um Hook do React que permite realizar efeitos colaterais em componentes funcionais. Isso inclui ações como buscar dados de uma API, manipular o DOM diretamente, configurar timers, e muito mais. 
*/

function Fatorial(n) {
  if (n < 0) return -1; // Fatorial não definido para números negativos
  if (n === 0 || n === 1) return 1; // Fatorial de 0 e 1 é 1
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
      resultado *= i;
  }
  return resultado;
}


const Effcet = () => {
  const [number, setNumber] = useState(1)
  const [fatorial, setFatorial] = useState(1)
  const [cond, setCond] = useState("")

  useEffect(function () {
    setFatorial(Fatorial(number))
    if(number % 2 == 0) setCond("PAR")
    if(number % 2 != 0) setCond("IMPAR")
  }, [number])



  return (
    <div>
      <h1>Fatorial</h1>
      <span>Resultado: {fatorial}</span><br /><br />
      <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
      <h3>Resultado: <strong>{cond}</strong></h3>
    </div>
  )
}

export default Effcet