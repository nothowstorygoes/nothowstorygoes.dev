"use client";
import React from "react";
import styles from "../css/page.module.css";
import {Image} from "next/image";

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      src: "/nextjs-github-pages/avv.mp4",
      alt: "Screenshot of my project",
      href: "https://www.avvcarloantonioesposito.altervista.org",
      text: "Website made in traditional HTML, CSS and JS for a lawyer",
    },
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);

  const changeSlide = (step) => {
    setActiveSlide(
      (prevSlide) => (prevSlide + step + slides.length) % slides.length
    );
  };

  return (
    <div>
      <div className={styles.slideshow_container}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === activeSlide ? styles.active : ""
            }`}
          >
            {slide.href ? (
              <a href={slide.href}>
                {slide.src.endsWith(".mp4") ? (
                  <video
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  >
                    <source src={slide.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image src={slide.src} alt={slide.alt}/>
                )}
              </a>
            ) : (
              <>
                {slide.src.endsWith(".mp4") ? (
                  <video
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  >
                    <source src={slide.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image src={slide.src} alt={slide.alt}/>
                )}
              </>
            )}
          </div>
        ))}
        <button
          className={styles.prev}
          onClick={() => changeSlide(-1)}
        ></button>
        <button className={styles.next} onClick={() => changeSlide(1)}></button>
      </div>
      <p className={styles.textSlideshow}>{slides[activeSlide].text}</p>
    </div>
  );
};

export default Slideshow;
