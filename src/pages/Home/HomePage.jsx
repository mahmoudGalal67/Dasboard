import React from 'react';
import HeaderComponent from './component/HeaderComponent';
import SidebarComponent from './component/SidebarComponent';
import ChartComponent from './component/ChartComponent';
import SummaryComponent from './component/SummaryComponent';
import OrdersComponent from './component/OrdersComponent';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="hompePage">
    <div className="headerComponent"> 
      <HeaderComponent /> 
      </div>
    <div className="app-container">
        <div className="right">
             <div className="homepage-contentComponent"> 
              <div className="SummarComponentClass">
                <SummaryComponent /> 
                </div>
               <div className="CharComponentClass">
               <ChartComponent />
               </div>       
              </div>
              <div className='ordersComponentClass'>
                <OrdersComponent />
            </div>
        </div>
        <div class="left">
          <div className="SidebarComponentClass">  
            <SidebarComponent />
            </div>
        </div>
    </div>
    </div>
  );
};

export default HomePage;