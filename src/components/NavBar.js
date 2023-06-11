import logo from '../images/logo.png'
import searchVector from '../images/searchVector.png'
import lockVector from '../images/lockVector.png'
import storiesVector from '../images/storiesVector.png'
import hamburguerVector from '../images/hamburguerVector.png'

export default function NavBar() {
  return (
    <header class='header'>
      <button class='btn logo'><img alt='logo' src={logo}></img></button>
      <div class='nav-bar '>
        <button class=' desktop btn'>A Companhia</button>
        <button class='desktop btn '>Governança</button>
        <button class='desktop btn '>Informações aos investidores</button>
        <button class='desktop btn'>Informações financeiras</button>
        <button class='desktop btn'>Serviços RI</button>
        <button class='desktop btn'><img src={searchVector} alt='search vector'></img></button>
        <button class='desktop btn'>
          <img class='vector' src={lockVector} alt='lock vector' />
          Área restrita
        </button>
        <button class='btn stories'>
          <div>
            <p>stories <strong>RI</strong></p>
            <div class='stories-vector'>
              <img class='vector' src={storiesVector} alt='stories vector'></img>
            </div>
          </div>
        </button>
        <button class='btn mobile'>
          <img src={hamburguerVector} alt='navigation bar'></img>
        </button>
      </div>
</header>
  )
}