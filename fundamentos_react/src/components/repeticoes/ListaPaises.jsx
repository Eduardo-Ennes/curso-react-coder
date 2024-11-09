import Paises from "../../data/dataPaises"
import Alunos from "../../data/ListaAlunos"
import "./ListaPaises.css"

const ListaPaises = () => {
  return (
    <div className="Card">
        <ul>
            {Paises.map((pais) => (
                <li key={pais.id}>{pais.pais} - {pais.cidade}</li>
            ))}
        </ul>
        <table>
            <caption>Nota dos alunos</caption>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Matéria</th>
                    <th>Nota</th>
                    <th>Situação</th>
                </tr>
            </thead>
            <tbody>
                {Alunos.map((aluno) => (
                <tr key={aluno.id}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.materia}</td>
                    <td>{aluno.nota}</td>
                    {aluno.nota >= 7 && <td>Aprovado</td>}
                    {aluno.nota >= 4 && aluno.nota < 7 && <td>Recuperação</td>}
                    {aluno.nota < 4 && <td>Reprovado</td>}
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListaPaises