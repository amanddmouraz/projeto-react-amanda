import Header from '../components/Header'
import sobre from '../assets/homes.svg'
import styles from '../styles/pages/sobre.module.css'
import amanda from '../assets/amanda.jpg'


const Sobre = () => {
  return (
    <>
      <Header title="Trajetória" image={sobre} />

      <div className={styles.sobreContainer}>
        <img className={styles.photoProfile} src={amanda} />
        <h1> E aí, bora abalar no mundo dev?!</h1>
        <p>
          Olá linkedinho! Estou dando os meus primeiros passos na carreira no mundo do TI. 💻

          Efetivamente, já estive em cargos relacionado a suporte técnico em nível pleno, pois ocupei o cargo
          supervisora de uma equipe, a qual parte as demandas do setor de desenvolvimento relacionadas a bugs,
          testes, sugestões e novas funcionalidades estavam ligadas completamente o meu trabalho.
          Em meu último cargo como assistente de suporte, fui responsável por realizar suporte interno para os colegas de trabalho (independente de experiência/senioridade) e também para os clientes da plataforma, entre esses, key accounts.

          Resolutiva, ágil e comunicativa (falante)! 😅

          Tenho me encontrado no mundo das desenvolvedoras front-end e atualmente estou cursando bacharelado em Ciências e Tecnologia na UFRN. 🎓
    </p>
      </div>
    </>

  )
}

export default Sobre