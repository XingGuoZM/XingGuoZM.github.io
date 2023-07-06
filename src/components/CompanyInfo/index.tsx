import React, { useEffect } from 'react';
import Swiper from 'swiper'
import "swiper/css";

import './index.css';

export default function CompanyInfo(props) {

  useEffect(() => {
    const swp = new Swiper('.swiper', {
      loop: true,
      speed: 500,
      autoPlay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    return () => {
      swp.destroy();
    };
  }, []);

  return <div className="swiper">
    <div className="swiper-wrapper">
      {props.company.map(item => (
        <div className="swiper-slide" key={item.name}>
          <div className="companyCell">
            <div>{item.value}</div>
          </div>
        </div>
      ))}
    </div>
    <div className='swiper-pagination'></div>
  </div>
}