import React, { useState } from 'react';
import HeaderComponent from './component/HeaderComponent';
import RequestHead from './component/RequestHead';
import Swiper from './component/Swiper';
import OrderSummary from './component/OrderSummary';

const RequestsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showDetails, setShowDetails] = useState(false); 

  const handleCardClick = (index) => {
    if (selectedIndex === index) {
      setShowDetails(!showDetails);
      setSelectedIndex(null); 
    } else {
      setSelectedIndex(index);
      setShowDetails(true);
    }
  };

  return (
    <>
      <HeaderComponent />
      <RequestHead />
      <Swiper selectedIndex={selectedIndex} onCardClick={handleCardClick} />
      <OrderSummary selectedIndex={selectedIndex} showDetails={showDetails} />
    </>
  );
};

export default RequestsPage;