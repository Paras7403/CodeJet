import React from 'react'
import './style.css'
import person from '../../Assets/Capture.JPG'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  return (
    <div className='home'>
      <h1>CodeJet</h1>
      <p className='changing'><span className="typewriter"></span></p>

      <div className='infoContainer'>
        <div className='immgContainer'>
          <img src={person} alt='a person walking with laptop' />
        </div>
        {/* <p>Optimal coding experience with <strong>Monaco Editor</strong>, powered by 
          <strong>Judge0</strong> for on-the-go code compilation.<br></br>
          Choose a language, write code, and you're set.
        </p> */}
        <p>
        <strong>Efficient Coding Hub</strong>:  CodeJet, a desktop compiler, ensures speedy and efficient coding.
        <br></br>
        <strong>Interview Prep Aid</strong>:  Swiftly hone coding skills for interviews with CodeJet.
        <br></br>
        <strong>Monaco Finesse</strong>:  Enjoy top-notch coding finesse using Monaco Editor.
        <br></br>
        <strong>Language Versatility</strong>:  CodeJet supports 16+ languages seamlessly with Judge0 API.
        <br></br>
        <strong>Desktop Adaptation</strong>:  User-friendly interface tailored for efficient desktop use.
        </p>
      </div>

      <div className='optionContainer'>
        <div className='webOption'>
          <h3>Web Development</h3>
          <p>Craft stunning web designs effortlessly with HTML, CSS, and JavaScript. 
            Witness your creations come to life instantly on our platform.</p>
          <button onClick={() => { navigate('/webdevelopment') }} >Web.</button>
        </div>

        <div className='devOption'>
          <h3>Development</h3>
          <p>Explore 16+ languages on our platform code transcends compilation, animating with vivid outputs and insightful revelations, bringing projects alive.</p>
          <button onClick={() => { navigate('/development') }} >Dev.</button>
        </div>
      </div>
    </div>
  )
}

export default Home