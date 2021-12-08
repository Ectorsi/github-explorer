export function RepositoryItem({ repository }) {
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