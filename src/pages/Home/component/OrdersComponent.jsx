import React from 'react';
import './OrdersComponent.css';

const OrdersComponent = () => {
  return (
    <div className="orders-section">
      <h3>أحدث الطلبات</h3>
      <div className="order-details">
        <p>لا توجد طلبات</p>    
      </div>
    </div>
  );
};

export default OrdersComponent;
