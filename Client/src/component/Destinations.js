import React from 'react'
// import teagrow from './teagrow.jpg'
// import image2 from '../assets/image-2.jpg'
// import image3 from '../assets/image-3.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Welcome to Gangasiri</h3>
      <div className='grid'>
        <div>
        <img src="/teagrow.jpg"/>
          <h3>We are Tea Growers</h3>
          <p>
          A small tea grower with big dreams; bringing Ceylon Tea – the finest in the world- direct to tea lovers.
          </p>
        </div>

        <div>
        <img src="/ethics.jpg"/>
          <h3>We Believe Integrity & Ethics</h3>
          <p>
          Maintains its founding commitment to integrity & ethics. 
          </p>
        </div>

        <div>
        <img src="/teacup.jpg"/>
          <h3>Our Teas, For Lovers of Tea</h3>
          <p>
          Bringing a luxury tea experience for the tea aficionados around the world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations