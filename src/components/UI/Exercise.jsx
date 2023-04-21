import React from 'react'
import '../../styles/exercise.css'
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'

const Exercise = () => {
  return (
    <section id='schedule'>
      <div className='container exercise_container'>
        <div className='exercise_top'>
          <h2 className='section_title'>
            Benefits of <span className='highlights'>Exercise</span>
          </h2>

          <p>
            Regular exercise has numerous benefits <br /> for both physical and
            mental health.
          </p>
        </div>

        {/* =====  exercise list ===== */}
        <div className='exercise_wrapper'>
          <div
            className='exercise_item'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            <span className='exercise_icon'>
              <img src={lunges} alt='' />
            </span>

            <div className='exercise_content'>
              <h4>Healthy Life</h4>
              <p>
                Regular exercise can also reduce the risk of chronic diseases
                such as diabetes, heart disease, and some types of cancer.
              </p>
            </div>
          </div>

          <div
            className='exercise_item'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            <span className='exercise_icon'>
              <img src={yoga} alt='' />
            </span>

            <div className='exercise_content'>
              <h4>Increased Flexibility</h4>
              <p>
                Exercise helps to strengthen muscles and bones, improve
                cardiovascular health, and increase flexibility and balance.
              </p>
            </div>
          </div>

          <div
            className='exercise_item'
            data-aos='zoom-in'
            data-aos-duration='1500'
          >
            <span className='exercise_icon'>
              <img src={extended} alt='' />
            </span>

            <div className='exercise_content'>
              <h4>Reducing Blood Pressure</h4>
              <p>
                Regular exercise can improve your cardiovascular health and
                strengthen your muscles, leading to increased energy and
                stamina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exercise
