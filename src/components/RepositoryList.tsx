import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import axios from "axios";
import { useEffect, useState } from "react";

type RepositoryListType = {
    name: string;
    language: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<RepositoryListType[]>([]);

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
                    key={repository.name} 
                    repository={repository}
                    />
                })}
            </ul>
        </section>
    )
}