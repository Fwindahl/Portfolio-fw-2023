import React from 'react'
import { useState } from 'react'
import { SliderData } from './SliderData'
import '../Work/Work.scss'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const Work = ({ slides, title, description }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  if (!Array.isArray(slides) || slides.length === 0) {
    return null
  }
  return (
    <div className="container">
      <div className="slider-container">
        {SliderData.map((slider, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              <div className="project-info">
                <h2>{slider.title}</h2>
                <p>{slider.description}</p>
              </div>
              <div className="moreInfoDisplayHover">
                <p className="showText">{slider.moreInfo}</p>
              </div>
              {index === current && (
                <img src={slider.image} alt="slide" className="img-slide" />
              )}
            </div>
          )
        })}
        <FaArrowAltCircleLeft
          className="arrow arrow-left"
          onClick={previousSlide}
        />
        <FaArrowAltCircleRight
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
    </div>
  )
}

export default Work
