import React from 'react'

const Hero = () => {
  return (
    <main className='hero container '>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='second-btn'>Category</button>
            </div>

            <div className='shopping'>
                Also Available On
            </div>

            <div className='brang-icons'>
                <img src='/images/flipkart.png' alt='flipkart-image'></img>
                <img src='/images/amazon.png' alt='amazon-image'></img>
            </div>

        </div>
        <div className='hero-image'>

            <img src='/images/shoe_image.png' alt='brand-image'></img>

        </div>

    </main>
  )
}

export default Hero