import { useEffect, useState } from "react";
import { api } from "../../services/ApiService";
import { Link } from "react-router-dom";
import "./style.css"


export default function Group(){
    const [group, setGroup] = useState([]);

    useEffect(()=>{
        async function loadGroup(){
            const group_id = sessionStorage.getItem("group");
            const response = await api.get("/group", {
                headers: {group_id}
            });
            setGroup(response.data.friends)

        }
        loadGroup()
    }, [])
    async function handleClick(){
        const user_id = localStorage.getItem("user");
        const group_id = sessionStorage.getItem("group");
        await api.post("/draw", "",{
            headers: {group_id, user_id}
        })
    }
    return (
        <>   
            <h2>Participantes do grupo:</h2><br /><br />
            <ul className="group-list">
                {group.map(Group =>(
                    <li key={Group.name}>
                        <strong>Nome: {Group.name}</strong>
                    </li>
                ))}
            </ul>
         
            <Link to="/dashboard">
                <button  onClick={handleClick} className="button">Realizar sorteio e  por enviar e-mail</button>
            </Link>
            <h9>
                *Atenção essa ação não pode ser desfeita!
            </h9>
        </>
    )
}