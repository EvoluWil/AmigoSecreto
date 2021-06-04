import { useEffect, useState } from "react"
import { api } from "../../services/ApiService"


let friendlist = []
export default function Create({ history }){
    let [friends, setFriends] = useState({})
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [groupName, setGroupName] = useState("")
    
    const user_id = localStorage.getItem("user");

    async function handleSubmit(event){
        event.preventDefault()

        const response = await api.post("/groups", {friends: friendlist, name: groupName}, {
            headers: {user_id}
        })

        const {_id} = response.data;
        localStorage.setItem("group", _id)
    
        history.push("/dashboard")
    
    }
    useEffect(()=>{
        setEmail("")
        setName("")
    },[friends])

    function handleClick(){
        setFriends(friends = ({name:name, email:email}));
        friendlist.push(friends)

    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Edite sua Lista</h2><br />
            <label htmlFor="Name">Nome do grupo *</label>
            <input onChange={event => setGroupName(event.target.value)}  type="text" placeholder="Ex: Natal da familia"/>

            <h2>Criar lista de amigos</h2><br />
            <label htmlFor="Name">Nome do amigo</label>
            <input onChange={event => setName(event.target.value)} value={name} type="text" placeholder="Ex: José da Silva"/>
            <label htmlFor="Name">E-mail do amigo</label>
            <input onChange={event => setEmail(event.target.value)} value={email} type="text" placeholder="Ex: josedasilva@exemplo.com"/>

            <button type="button" onClick={handleClick} className="button">Adicionar</button><br />

            <ul className="">
                <h2>Lista de amigos</h2><br />

                {friendlist.map(Group =>(
                    <li key={Group.email}>
                        <p>{Group.name} : {Group.email}</p><br />
                    </li>
                ))}
            </ul>

            <button type="submit" className="button">Salvar</button>
        </form>
    )
}