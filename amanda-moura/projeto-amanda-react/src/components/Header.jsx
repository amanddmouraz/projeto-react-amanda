import sytles from '../styles/components/header.module.css'

const Header = ({title, image}) => {
  return (
    <header className={sytles.headerContainer}>
        <h1 className={sytles.headerTitle}>{title}</h1>
        <img className={sytles.headerImage} src={image} alt="imagem canva" />
    </header>
  )
}

export default Header