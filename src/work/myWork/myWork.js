import React from 'react'
import Styles from './myWork.module.css'
import Image1 from './img/Untitled-1.webp'
import Image2 from './img/url-shortening-app.webp'
import Image3 from './img/intro-section-with-dropdown-navigation.webp'
import Image4 from './img/insure-langing-page.webp'
import Image5 from './img/pricing-component-with-toggle.webp'
import Image6 from './img/four-card-feature-section.webp'
import Image7 from './img/space-tourism-website.webp'

const myWork = () => {
  return (
    <div className={Styles.div}>
      <a href='https://ratinabijashvili.github.io/Bike-app' target='_blank'>
        <img src={Image1} className={Styles.img} alt='image1' />
      </a>
      <a
        href='https://ratinabijashvili.github.io/url-shortening-api/'
        target='_blank'
      >
        <img src={Image2} className={Styles.img} alt='image2' />
      </a>
      <a
        href='https://ratinabijashvili.github.io/intro-section-with-dropdown-navigation/'
        target='_blank'
      >
        <img src={Image3} className={Styles.img} alt='image3' />
      </a>
      <a
        href='https://ratinabijashvili.github.io/insure-landing-page/'
        target='_blank'
      >
        <img src={Image4} className={Styles.img} alt='image4' />
      </a>
      <a
        href='https://ratinabijashvili.github.io/pricing-component-with-toggle/'
        target='_blank'
      >
        <img src={Image5} className={Styles.img} alt='image5' />
      </a>
      <a
        href=' https://ratinabijashvili.github.io/four-card-feature-section'
        target='_blank'
      >
        <img src={Image6} className={Styles.img} alt='image6' />
      </a>
      <a
        href='https://ratinabijashvili.github.io/space-tourism-website'
        target='_blank'
      >
        <img src={Image7} className={Styles.img} alt='image6' />
      </a>
    </div>
  )
}

export default myWork
