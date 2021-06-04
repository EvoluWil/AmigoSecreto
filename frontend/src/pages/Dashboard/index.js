import { useEffect, useState } from "react";
import { api } from "../../services/ApiService";
import { Link } from "react-router-dom";
import "./style.css";


export default function Dashboard(){
    const [group, setGroup] = useState([])
    
    useEffect(()=>{    
        
        async function loadGroups(event){
            const user_id = localStorage.getItem("user");
            const response = await api.get("/dashboard", {
                headers: {user_id}
                
            });
            setGroup(response.data)

        }
        loadGroups()

    }, [])
    function handleClick(_id){
        sessionStorage.setItem("group", _id)
    }
    return (
        <>
            <h2>Escolha o grupo que deseja gerenciar</h2><br /><br />
            <ul className="group-list">
                {group.map(Group =>(
                    <li key={Group._id}>
                        <Link to="/group">
                            <strong onClick={()=>handleClick(Group._id)} >{Group.name}</strong>
                        </Link>
                    </li>
                ))}
            </ul>

            <Link to="/groups">
                <button className="button">Cadastrar novo Grupo</button>
            </Link>
        </>
    )
}
