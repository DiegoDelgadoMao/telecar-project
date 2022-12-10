import React,{useState,useEffect} from 'react';
import "@styles/swiper.css";



export default function AppSlider() {

  useEffect(()=>{
    const slides = document.querySelectorAll('.slide');
    const btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();
  });

  return (
    <>
    <div className='container-slider'>
    <div className="img-slider">
      <div className="slide active">
        <img src="https://www.daywireless.com/blog/wp-content/uploads/2022/03/MOTOTRBO-R7.jpeg" alt=""/>
        <div className="info">
          <h2>Slide 01</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="slide">
        <img src="https://www.securitysales.com/wp-content/uploads/2022/01/Motorola_MOTOTRBO-R7-1.jpg" alt=""/>
        <div className="info">
          <h2>Slide 02</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="slide">
        <img src="https://www.scandepot.com.mx/product_images/uploaded_images/1457493347-min.jpg" alt=""/>
        <div className="info">
          <h2>Slide 03</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="slide">
        <img src="https://www.motorolasolutions.com/content/dam/msi/images/en-xw/static_files/Enterprise_NA_Manufacturing_Radio_TRBO_Manufacturing_127_Juan-Martinez.jpeg" alt=""/>
        <div className="info">
          <h2>Slide 04</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="slide">
        <img src="https://radiosmotorola-spectrum.com/wp-content/uploads/2021/04/BANNER-RADIOS-MOTOROLA.jpg" alt=""/>
        <div className="info">
          <h2>Slide 05</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="navigation">
        <div className="btn active"></div>
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
      </div>
    </div>
    </div>
    </>
  );
}