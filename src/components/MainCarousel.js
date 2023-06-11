import bannersHome from '../images/bannersHome.png'
import secondBannersHome from '../images/secondBannersHome.jpg'


export default function MainCarousel() {
  return (

      <div id="carousel" class="carousel slide" data-bs-ride='carousel'>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>    
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={bannersHome} class="d-block img-fluid w-10" alt='first carousel banner'></img>
            <div class="carousel-caption">
              <p>HEADING 1, REGULAR</p>
              <p><strong>HEADING 1, REGULAR</strong></p>
              <p class='caption'>Confira os últimos resultados da companhia</p>
              <button class="btn btn-primary">Saiba Mais</button>

            </div>
          </div>
          <div class="carousel-item">
            <img src={secondBannersHome} class="d-block img-fluid" alt='second carousel banner'></img>
            <div class="carousel-caption">
              <p>HEADING 2, REGULAR</p>
              <p><strong>HEADING 2, REGULAR</strong></p>
              <p class='caption'>Confira os últimos resultados da companhia</p>
              <button class="btn btn-primary">Saiba Mais</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  )
}

