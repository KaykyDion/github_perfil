import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setRepos(resJson);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      <ul className={styles.list}>
        {repos.map(({ id, name, language, html_url }) => {
          return (
            <li key={id} className={styles.listItem}>
              <div className={styles.itemName}>
                <b>Nome:</b> {name}
              </div>
              <div className={styles.itemLanguage}>
                <b>linguagem:</b> {language}
              </div>
              <div>
                <a className={styles.itemLink} target="_blank" href={html_url}>
                  Visitar no GitHub
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReposList;
