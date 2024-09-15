import React from 'react';
import './OrdersComponent.css';

const OrdersComponent = () => {
  return (
    <div className="orders-section">
      <div className='orders-header'> 
      <h3> <i className="sicon-box mx-2"></i>أحدث الطلبات</h3>
      </div>
      <div className="order-details">
        <p>لا توجد طلبات</p>    
      </div>
    </div>
  );
};

export default OrdersComponent;
