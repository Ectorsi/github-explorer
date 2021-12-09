

export type RepositoryItemProps = {
    repository: {
        name: string;
        language: string;
        html_url: string;
    }
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.language ?? 'No language'}</p>

            <a href={repository.html_url}>
                Acessar repositórios
            </a>
        </li>
    );
}