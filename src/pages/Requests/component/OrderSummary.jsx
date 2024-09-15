import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import './OrderSummary.css';

const OrderSummary = ({ selectedIndex, showDetails }) => {
  const data = [
    { title: 'جاري التوصيل', count: 0 },
    { title: 'تم التنفيذ', count: 0 },
    { title: 'قيد التنفيذ', count: 0 },
    { title: 'بانتظار المراجعة', count: 0 },
    { title: 'بانتظار الدفع', count: 0 },
    { title: 'محذوف', count: 0 },
  ];

  const selectedOrder = selectedIndex !== null ? data[selectedIndex] : null;

  return (
    <div className="order-summary">
      <div className="header">
        <div className="header-title">
          <input type="checkbox" className="header-checkbox" disabled />
          <h2>الطلبات </h2>
          {showDetails && selectedOrder ? (
            <div className="order-info">
              <span className="order-details">
                {selectedOrder.title} {selectedOrder.count}
              </span>
              <FontAwesomeIcon icon={faTimes} className="close-icon" />
            </div>
          ) : null}
        </div>
        <button className="edit-button">
          <i className="sicon-magic-wand flip-x" ></i> تحرير سريع
        </button>
      </div>
      <div className="order-item">
        <div className="order-item-right">
          <div className="actions">
            <input type="checkbox" className="header-checkbox" />
          </div>
          <div className="order-details">
            {showDetails && selectedOrder ? (
              <p>لا توجد طلبات محددة</p>
            ) : (
              <p>
                <span> #128487450 </span>
                <span> مستعرض الجوال</span>
                <span> مسودة </span>
              </p>
            )}
          </div>
        </div>

        {showDetails && selectedOrder ? (
          null
        ) : <div className="order-item-left">
          <div className="order-item-left-1">
            <p>SAR 0</p>
          </div>
          <div className="order-item-left-2">
            <p>منذ اليوم</p>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default OrderSummary;