import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.scss'
// import hero from '../../../../public/img/anime.jpg'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArr = ['', 'F', 'i', 'l', 'i', 'p', '!']
  const jobArr = [
    'F',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    '',
    'W',
    'e',
    'b',
    '',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span>
          <br />
          <span className={`${letterClass} _14`}>I</span>
          <span className={`${letterClass} _15`}>'</span>
          <span className={`${letterClass} _16`}>m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArr}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArr}
            idx={14}
          />
        </h1>
        <p>
          A junior web developer who have worked with a various of different
          JavaScript frameworks which you will se a little bit down in my
          portfolio. I've worked with the full-stack and my personal favorite is
          front end.
        </p>{' '}
        <Link to="/contact" className="flat-button">
          Get In Touch
        </Link>
      </div>
      <div className="hero-container">
        <div className="border-line">
          <img className="hero" src="/img/hero.jpg" alt="Me" />

          <div className="img-text-container">
            <div className="little-bout-me-text">
              <h3>Little About Me</h3>
              <p>
                I have been interested in technology from a young age, but I
                never saw a future in it. I tried various careers, including
                construction, warehouses, and sales positions, before
                discovering a bootcamp that taught programming. So i decided to
                give it a shot and enrolled in the academy, where my love for
                coding grew.
              </p>
              <Link to="/about" className="kr-button">
                Keep reading
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
