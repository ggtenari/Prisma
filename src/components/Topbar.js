import upVector from '../images/upVector.png'

export default function Topbar() {
  if(true){
    return (
<div class='top-bar desktop'>
  <div class=' top-left'>
    <button class='btn btn-link button' href='http://localhost:3000/'>
    Relações com Investidores
    </button>
    |
    <button class='btn btn-link button' href='http://localhost:3000/'>
    Institucional
    </button>
  </div>
  <div class='top-mid'>
    <img class='vector' src={upVector} alt='economy vector'></img>
      PRISM4: R$ 4,55 +1.5%
  </div>
  <div class=' top-right'>
    <div class='text-decoration-underline'>Acessibilidade</div>
    <button class='font fs-5 btn dark'>A+</button>
    <button class='font btn  fs-7'>A-</button>
    <div class='lang'>PT | EN</div>
    </div>
</div>
 )
  }
  console.log('negativo');
return null;
}