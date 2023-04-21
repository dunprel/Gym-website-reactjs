import React from 'react'
import '../../styles/start.css'
import trainingImg from '../../assets/img/trainer.png'

const Start = () => {
  return (
    <section id='classes'>
      <div className='container'>
        <div className='start_wrapper'>
          <div className='start_img'>
            <img
              src={trainingImg}
              alt=''
              data-aos='fade-left'
              data-aos-duration='1500'
            />
          </div>

          <div
            className='start_content'
            data-aos='fade-right'
            data-aos-duration='1500'
          >
            <h2 className='section_title'>
              Ready to make a <span className='highlights'>change?</span>
            </h2>
            <p>
              Get hooked on Cardio Tai Box, Yoga, HIIT, and more! Your favorite
              FitBody instructors are now in your pocket. Every device, every
              fitness level, every workout imaginable! So much fun, you'll
              forget you're working out.
            </p>
            <button className='register_btn'>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Start
