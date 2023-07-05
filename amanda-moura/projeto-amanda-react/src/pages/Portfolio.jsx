import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineGithub } from "react-icons/ai"


import portfolio from "../assets/projects.svg";
import styles from "../styles/pages/portfolio.module.css";

const Portfolio = () => {
  const [inputValue, setInputValue] = useState("");
  const [reposFromApi, setRepos] = useState([]);
  const [reposFiltered, setReposFiltered] = useState([]);

  const handleChange = (e) => setInputValue(e.target.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/amanddmouraz/repos"
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredRepos = reposFromApi.filter((repo) => {
      return repo.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setReposFiltered(filteredRepos);
  }, [inputValue, reposFromApi]);

  return (
  <>
<Header title="Meus projetos" image={portfolio} />
    <div className={styles.conteinerSearch}>
      <h2 className={styles.portfolioTitle}> Projetos Github <AiOutlineGithub /> </h2> 
      <div className={styles.inputContainer}>
        <input
          className={styles.inputName}
          placeholder="Digite um repositório"
          onChange={handleChange}
        />
      </div>
      <div className={styles.cardsContainer}>
        {inputValue
          ? reposFiltered.map((repo) => (
              <div key={repo.id} className={styles.card}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <GoArrowRight />
                </a>
              </div>
            ))
          : reposFromApi.map((repo) => (
              <div key={repo.id} className={styles.card}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <GoArrowRight />
                </a>
              </div>
          
            ))}
      </div>
    </div>
    </>
  );
};

export default Portfolio;
