import React, { useEffect } from 'react';
import Swiper from 'swiper'
import './index.css';

export default function CompanyInfo(props) {

  useEffect(() => {
    const swp = new Swiper('.swiper', { loop: true, speed: 500 });
    return () => {
      swp.destroy();
    };
  }, []);

  return <div className="swiper">
    <div className="swiper-wrapper">
      {props.company.map(item => (
        <div className="swiper-slide" key={item.name}>
          <div className="companyCell">
            <div>{item.name}</div>
            <div>{item.addr}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
}