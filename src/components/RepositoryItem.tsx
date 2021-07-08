interface RepositoryitemProps {
  repository : {
    name: string;
    description: string;
    html_url:string
  }
}

export function RepositoryItem(props:RepositoryitemProps) {
  const { name, description, html_url } = props.repository;

  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      <a href={html_url}>acessar o repositório</a>
    </li>
  );
}
