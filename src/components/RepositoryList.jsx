import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import axios from "axios";
import { useEffect, useState } from "react";

//"https://api.github.com/users/Ectorsi/repos"

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/ectorsi/repos')
            .then(res => {
                return (
                    setRepositories(res.data),
                    console.log(res.data)
                )
            })
    },[])

    return (
        <section className="repository-list" >
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem 
                    key={repository.id} 
                    repository={repository}
                    />
                })}
            </ul>
        </section>
    )
}