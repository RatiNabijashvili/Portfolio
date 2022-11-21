import React, { useRef, useEffect } from 'react'
import Template from '../template/template'
import Image from './img/mohammad-rahmani-8OnkIkFBBtM-unsplash.webp'
import Styles from './about.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const divRef = useRef(null)

  useEffect(() => {
    const el = divRef.current
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2.5,
        scrollTrigger: {
          trigger: el,
        },
      }
    )
  }, [])

  return (
    <div className={Styles['main-div']} id='about' ref={divRef}>
      <div>
        <Template head='About' />
        <div className={Styles['img-div']}>
          <img src={Image} className={Styles.img} alt='about-img' />
        </div>
      </div>
      <div className={Styles['text-div']}>
        <div className={Styles['h2-div']}>
          <h2 className={Styles.h2}>My name is</h2>
          <h2 className={Styles.name}>Rati Nabijashvili</h2>
        </div>
        <p className={Styles.p}>
          Hello, I’m a junior front-end web developer, self-taught <br />{' '}
          programmer, who want’s to become a full-stack <br />
          I have developed many personal projects, also <br /> I have completed
          Harvard’s CS50 course and have an <br />
          official degree. I am a student at Georgian Technical University{' '}
          <br />
          studying in the faculty of computer science.
        </p>
        <div className={Styles['components-div']}>
          <div className={Styles['first-column']}>
            <Components head='Country' subline='Georgia' />
            <Components head='Education' subline='Studying' />
            <a
              href='https://www.linkedin.com/in/rati-nabijashvili-63a941235/'
              target='_blank'
            >
              <Components head='Linkedin' subline='Rati Nabijashvili' />
            </a>
          </div>
          <div className={Styles['second-column']}>
            <Components head='Age' subline='18' />
            <a
              href='https://www.facebook.com/rati.nabijashvili.1'
              target='_blank'
            >
              <Components head='Facebook' subline='Rati Nabijashvili' />
            </a>
            <a href='https://github.com/RatiNabijashvili' target='_blank'>
              {' '}
              <Components head='Github' subline='RatiNabijashvili' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Components = (props) => {
  return (
    <div>
      <h2 className={Styles.head}>{props.head}</h2>
      <h2 className={Styles.subline}>{props.subline}</h2>
    </div>
  )
}
export default About
