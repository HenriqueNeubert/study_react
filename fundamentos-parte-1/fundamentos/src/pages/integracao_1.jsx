import Layout from "../components/Layout"
import { useState } from "react"

export default function Integração() {

  const [codigo,setCodigo] = useState(1)
  const [cliente,setCliente] = useState({})

    async function obterCliente() {
      // / await = aguardam
      const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
      const dados = await resp.json()
      setCliente(dados)

      //outra forma de buscar
      //fetch = buscar
      // fetch(`http://localhost:3000/api/clientes/${codigo}`)
      // //então
      //   .then(resp => resp.json())
      // //então
      //   .then(dados => setCliente(dados))    
    }
    
  return (
    <Layout>
      <div>
        <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
        <button onClick={obterCliente}>Obter Cliente</button>
      </div>
      <ul> 
        <li>Código: {cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>E-mail: {cliente.email}</li>
      </ul>
    </Layout>
  )
}