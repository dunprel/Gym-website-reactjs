import React from 'react'
import '../../styles/footer.css'
import logo from '../../assets/img/dumble.png'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer' data-aos='fade-up' data-aos-duration='1500'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_box'>
            <div className='logo'>
              <div className='logo_img'>
                <img src={logo} alt='' />
                <h2>Fitbody</h2>
              </div>
            </div>

            <p>
              Our top-of-the-line facilities and professionally certified
              personal trainers provide our members with a holistic experience.
            </p>
          </div>

          <div className='footer_box'>
            <h4 className='footer_title'>Company</h4>
            <ul className='footer_links'>
              <li>
                <a href='#'>Our programs</a>
              </li>
              <li>
                <a href='#'>Our plans</a>
              </li>
              <li>
                <a href='#'>Become a member</a>
              </li>
            </ul>
          </div>

          <div className='footer_box'>
            <h4 className='footer_title'>Quick Links</h4>
            <ul className='footer_links'>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Contact us</a>
              </li>
              <li>
                <a href='#'>Support</a>
              </li>
            </ul>
          </div>

          <div className='footer_box'>
            <h4 className='footer_title'>Quick Links</h4>
            <ul className='footer_links'>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Contact us</a>
              </li>
              <li>
                <a href='#'>Support</a>
              </li>
            </ul>
          </div>
        </div>

        <p className='copyright'>
          Copyright - {year} developed by <a href='#'>Dunprel.</a> All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
export default Footer
