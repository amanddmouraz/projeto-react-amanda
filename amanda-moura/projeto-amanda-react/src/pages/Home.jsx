import Header from '../components/Header'

import { AndroidLogo } from 'phosphor-react'
import { EnvelopeSimple } from 'phosphor-react'
import { Code } from 'phosphor-react'



import home from '../assets/welcome.svg'

import style from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
    <Header title = "O que que há velhinho?" image={home}/>
    <div className={style.homeConteiner}>
    <div className={style.cardConteiner}>
      <AndroidLogo  size={150} color= "#F0E68C" weight="thin" />
      <h2 className={style.cardTitle}> Vida </h2>
      <p className={style.cardDescription}>Conhecendo um pouco sobre @falidaelinda</p>
    </div>

    <div className={style.cardConteiner}>
      <Code size={150} color= "#F0E68C" weight="thin" />
      <h2 className={style.cardTitle}> Projetinhos </h2>
      <p className={style.cardDescription}>Aqui você encontra as minhas tentativas, loucuras e afins </p>
    </div>

    
    <div className={style.cardConteiner} >
      <EnvelopeSimple size={150} color= "#F0E68C" weight="thin" />
      <h2 className={style.cardTitle}> Fala que eu te escuto! </h2>
      <p className={style.cardDescription} >Entre em contato para reclamar, elogiar ou só dar um oi!</p>

    </div>

    </div>
    </>
  )
}

export default Home