import './App.css'
import Primeiro from "./components/Primeiro"
import ListaPaises from "./components/repeticoes/ListaPaises"
import IndiretaPai from './components/IndiretaPai'
import Input from './components/Input'
import Contador from './components/contador/Contador'
import MegaCena from './components/megaCena/MegaCena'

function App() {

  function gerarNumeroAleatorio() {
    var min = 0
    var max = 10
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const num = gerarNumeroAleatorio()
  

  return (
    <div className="App">
      <h1>Olá, mundo!</h1>
      <h2>Vou aprender react querendo ou não!</h2>
      <Primeiro aluno="Fefe do mercadinho" nota={10}/>
      <h3>Numero aleatório: {num}</h3>
      <ListaPaises/>
      <IndiretaPai/>
      <Input/>
      <Contador NumeroInicial={1} NumeroPasso={1}/>
      <MegaCena/>
    </div>
  )
}

export default App