import React, { useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGift, faLock, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Swiper.css';

const Swiper = ({ onCardClick, selectedIndex }) => {
  const data = [
    { title: 'جاري التوصيل', count: 0, color: '#999',icon: <i className="order-st-entry sicon-shipping" style={{ fontSize: '20px' }}></i> },
    { title: 'تم التنفيذ', count: 0, color: '#999', icon: <i className="order-st-entry sicon-check" style={{ fontSize: '20px' }}></i> },
    { title: 'قيد التنفيذ', count: 0, color: '#999', icon: <i className="order-st-entry sicon-gift" style={{ fontSize: '20px' }}></i> },
    { title: 'بانتظار المراجعة', count: 0, color: '#999', icon:<i className="order-st-entry sicon-time" style={{ fontSize: '20px' }}></i> },
    { title: 'بانتظار الدفع', count: 0, color: '#999', icon: <i className="order-st-entr sicon-watch" style={{ fontSize: '20px' }}></i> },
    { title: 'محذوف', count: 0, color: '#999', icon: <i className="order-st-entry sicon-folder-cancel" style={{ fontSize: '20px' }}></i> },
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
                  {item.icon}
                </div>
              </div>
            ) : (
              item.icon
            )}
          </div>
          <div className="flexContenetClass">
            <div>
              <span>{item.count}</span>
            </div>
            <div>
              <h3 style={{position:"relative"}}><span className="status-circle"></span>{item.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Swiper;