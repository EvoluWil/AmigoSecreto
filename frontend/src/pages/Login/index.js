import { useState } from 'react';
import {api} from '../../services/ApiService';


export default function Login({ history }){
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  async function handleSubmit(event){
    event.preventDefault()
    
    const response = await api.post("/login", { email, name });
    
    const {_id} = response.data;
    localStorage.setItem("user", _id)

    history.push("/dashboard")
  }
    return (
        <>
            <p>
                Crie seus <strong>grupos</strong> de amigo secreto e faça o sorteio com envio de e-mail <strong>gratuitamente</strong>
            </p>
            
            <form onSubmit={handleSubmit} >
                <label htmlFor="name">Nome:</label>
                <input onChange={event => setName(event.target.value)} type="text" placeholder="Ex: José da Silva" />
                <label htmlFor="email">E-mail:</label>
                <input onChange={event => setEmail(event.target.value)} type="email" id="email" placeholder="Ex: josedasilva@exemplo.com" />
                <button className="button" type="submit">Entrar</button>
            </form>

        </>
    )
}