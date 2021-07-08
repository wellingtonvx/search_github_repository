import { useState, useEffect, FormEvent } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repository, setRepository] = useState("");
  const [seacrh, setSearch] = useState(false);


  function getDataOnGitHub(event: FormEvent){

    event.preventDefault();

    fetch(`https://api.github.com/users/${repository}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));

      setSearch(true);

      console.log(repositories)
    }

  return (
    <section className="repository-list">

      <form onSubmit={ event => getDataOnGitHub(event)}>
        <h1>Digite o nome de um repositórtio</h1>
        <input type="text" onChange={event => setRepository(event.target.value)}/>
        <button>Buscar</button>
      </form>

      { seacrh === !true ? 
            (repositories.length === 0 && <h2> Não há repositorio para ser exibido</h2> ) 
            : 
            (
              <>
              <h2>Lista de Repositórios</h2>
        
              <ul>
                {repositories.map((repository) => {
                  return <RepositoryItem key={repository.name} repository={repository} />;
                })}
              </ul>
              </>
            ) 
      }

    </section>
  );
}
