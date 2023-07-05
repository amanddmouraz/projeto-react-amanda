import Header from '../components/Header'
import sobre from '../assets/homes.svg'
import styles from '../styles/pages/sobre.module.css'
import amanda from '../assets/amanda.jpg'


const Sobre = () => {
  return (
    <>
    <Header title = "Trajetória" image={sobre}/>

    <div className={styles.sobreContainer}>
    <img className={styles.photoProfile} src={amanda}/> 
    <h1> E aí, bora abalar no mundo dev?!</h1>

    </div>
    </>

  )
}

export default Sobre