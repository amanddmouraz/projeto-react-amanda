import Header from '../components/Header'
import contato from '../assets/contact.svg'
import styles from '../styles/pages/contato.module.css'
import { useState } from 'react'

const Contato = () => {
  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[mensagem, setMensagem] = useState('')

  function handleInputNome (e) {
    setNome(e.target.value)
  }

  function handleInputEmail (e) {
    setEmail(e.target.value)
  }

  function handleInputMensagem (e) {
    setMensagem(e.target.value)
  }

  return (
    <>
    <Header title = "Fala que eu te escuto 📣" image={contato}/>
    
    <main>
      <form className={styles.form} onSubmit={()=>{}}>
        <input
        className={styles.formInput}
        type="text" 
        placeholder="Digite seu nome"
        onChange={handleInputNome}
        value={nome}
        />
        <input 
        className={styles.formInput}
        type="email" 
        placeholder="Digite o seu e-mail"
        onChange={handleInputEmail}
        value={email}/>
        <textarea
        className={styles.formInput}
        type="text"
        placeholder="Digite sua mensagem"
        onChange={handleInputMensagem}
        value={mensagem}/>
        <button className={styles.buttonSend} type="submit"> Envie a sua mensagem </button>
      </form>
      </main>
    </>
  )
}

export default Contato