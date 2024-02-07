// react components
import { useEffect } from 'react';
// css
import Styles from './testimonials.module.css'

function Testimonials() {

  // run after render
  useEffect(() => {
    // invoke observe()
    observe()
  });

   //apply animation with IntersectionObserver js api
  function observe() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.filter(e => e.isIntersecting).forEach(entry => {
        // slidebottom class is on global css file
        entry.target.classList.add('slideBottom');
        observer.unobserve(entry.target);
      })
    })
    document.querySelectorAll('.animation')
      .forEach(e => {
        observer.observe(e)
      })
  }

  return (
    // Carasoul
    <div id="carouselExampleDark" className="carousel carousel-dark slide p-5  mx-auto animation">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner d-lg-flex p-lg-3 mb-lg-4">
        {/* Testimate 1 */}
        <div className={`${Styles.carouselItem} carousel-item active`} data-bs-interval="10000">
          <div className="carousel-caption ">
            {/* review */}
            <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
            {/* profession */}
            <h5 className='mt-4'>Operations Manager</h5>
            {/* name */}
            <p className='mb-4'>Sima patel</p>
          </div>
        </div>
        {/* Testimate 2 */}
        <div className={`${Styles.carouselItem} carousel-item `} data-bs-interval="2000">
          <div className="carousel-caption  ">
            {/* review */}
            <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
            {/* profession */}
            <h5>Project Manager</h5>
            {/* name */}
            <p>Dora Bridges</p>
          </div>
        </div>
        {/* Testimate 3 */}
        <div className={`${Styles.carouselItem} carousel-item `}>
          <div className="carousel-caption ">
            {/* review */}
            <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
            {/* preofession */}
            <h5>Marketing Director</h5>
            {/* name */}
            <p>Brad Stevens</p>
          </div>
        </div>
      </div>
      {/* Controls: < - > */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Testimonials;