import footerLogo from '../images/footerLogo.png'
import icons from '../images/icons.png'
import seloPrisma from '../images/seloPrisma.png'

export default function Footer() {
  return (
    <div class='footer'>
      <div class='footer-content'>
        <div class='logo'>
          <img src={footerLogo} alt='footer logo'></img>
          <button class='btn mobile'>Mapa do site +</button>
        </div>
        <div class='footer-btns'>
          <button class= 'btn desktop'>A Companhia</button>
          <button class= 'btn desktop'>Governança</button>
          <button class= 'btn desktop'>Informações aos investidores</button>
          <button class= 'btn desktop'>Informações financeiras</button>
          <button class= 'btn desktop'>Serviços RI</button>
        </div>
        <div class='social'>
          <img src={icons} alt='redes sociais'></img>
        </div>
        
      </div>
      <hr />
      <div class='footer-bottom-content'>
        <p class='desktop'>Prisma© Todos os direitos reservados 2023</p>
        <p>Viverra faucibus amet sollicitudin | Viverra faucibus amet sollicitudin</p>
        <img src={seloPrisma} alt='selo prisma'></img>
      </div>
    </div>
  )
}