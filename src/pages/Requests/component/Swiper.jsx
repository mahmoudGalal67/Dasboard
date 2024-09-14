import React, { useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGift, faClock, faLock, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Swiper.css';

const Swiper = ({ onCardClick, selectedIndex }) => {
  const data = [
    { title: 'جاري التوصيل', count: 0, color: '#F44336', icon: faClock },
    { title: 'تم التنفيذ', count: 0, color: '#4CAF50', icon: faCheck },
    { title: 'قيد التنفيذ', count: 0, color: '#2196F3', icon: faGift },
    { title: 'بانتظار المراجعة', count: 0, color: '#000000', icon: faLock },
    { title: 'بانتظار الدفع', count: 0, color: '#F44336', icon: faClock },
    { title: 'محذوف', count: 0, color: '#F44336', icon: faTrash },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index}
          className={`swiper-item ${selectedIndex === index ? 'selected' : ''}`}
          style={{
            borderColor: item.color,
            backgroundColor: selectedIndex === index ? '#007bff61' : '#e8f1f129',
          }}
          onClick={() => onCardClick(index)}
        >
          <div className="icon-Class" style={{ color: item.color }}>
            {selectedIndex === index ? (
              <div className="icons-class-header">
                <div className="fa-times-icon">
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                </div>
                <div className="icons-item-class">
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </div>
              </div>
            ) : (
              <FontAwesomeIcon icon={item.icon} size="2x" />
            )}
          </div>
          <div className="flexContenetClass">
            <div>
              <span>{item.count}</span>
            </div>
            <div>
              <h3>{item.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Swiper;