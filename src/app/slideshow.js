'use client'
import React from 'react';
import styles from "./page.module.css";

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      src: '/avv.png',
      alt: 'Image 1',
      href: 'https://www.avvcarloantonioesposito.altervista.org',
    },
    {
      id: 2,
      src: '/cubo.png',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: '/avv.png',
      alt: 'Image 3',
    },
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);

  const changeSlide = (step) => {
    setActiveSlide((prevSlide) => (prevSlide + step + slides.length) % slides.length);
  };

  return (
    <div className={styles.slideshow_container}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === activeSlide ? styles.active : ''}`}
        >
          {slide.href ? (
            <a href={slide.href}>
              <img src={slide.src} alt={slide.alt} />
            </a>
          ) : (
            <img src={slide.src} alt={slide.alt} />
          )}
        </div>
      ))}
      <button className={styles.prev} onClick={() => changeSlide(-1)}></button>
      <button className={styles.next} onClick={() => changeSlide(1)}></button>
    </div>
  );
};
export default Slideshow;