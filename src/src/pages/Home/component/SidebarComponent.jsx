import React from 'react';
import './SidebarComponent.css';
import Person from"./IMG/portrait-white-man-isolated_53876-40306.jpg";
import Image from"./IMG/The_Magma_-_21st_Century_Watch_Design.jpg";

const SidebarComponent = () => {
  return (
    <aside className="sidebar">
      <div className="notifications">

        <h5> <i class="fa-regular fa-bell mx-3"></i>التنبيهات</h5>
        <ul>
          <li>
            <img src={Person} alt="" className='Person'/>
            <p> زائر اضاف خاتم ميلر للسلة <br/> منذ 4 ساعات</p>  

            <img src={Image} alt="" className='Image'/>
          </li>
          <li>  
          <img src={Person} alt=""/>
          <p> زائر اضاف خاتم ميلر للسلة <br/> منذ 4 ساعات</p>  


           <img src={Image} alt=""/>
          </li>
          <li>
          <img src={Person} alt=""/>
          <p> زائر اضاف خاتم ميلر للسلة <br/> منذ 4 ساعات</p>  
  
 
           <img src={Image} alt=""/>
          </li>
          <li>
          <img src={Person} alt=""/>
          <p> زائر اضاف خاتم ميلر للسلة <br/> منذ 4 ساعات</p>  
 

           <img src={Image} alt=""/>
          </li>
          <li>
          <img src={Person} alt=""/>
          <p> زائر اضاف خاتم ميلر للسلة <br/> منذ 4 ساعات</p>  


           <img src={Image} alt=""/>
          </li>
          <li>
          <img src={Person} alt=""/>
          <p> زائر اضاف خاتم ميلر للسلة <br/> منذ 4 ساعات</p>  
 
 
           <img src={Image} alt=""/>
          </li>
        </ul>
      </div>
      <div className="missed-products">
        <h5> <i class="fa-solid fa-triangle-exclamation mx-3"></i> منتجات نفذت</h5>
        <ul>
          <li>
          <img src={Person} alt=""/>
          <p> زائر اضاف خاتم ميلر للسلة <br/> منذ 4 ساعات</p>  
 

           <img src={Image} alt=""/>
          </li>
          <li>
          <img src={Person} alt=""/>
          <p> زائر اضاف خاتم ميلر للسلة <br/> منذ 4 ساعات</p>  


           <img src={Image} alt=""/>
          </li>
          <li>
          <img src={Person} alt=""/>
          <p> Notification from Guest <br/> منذ 4 ساعات</p>  

           <img src={Image} alt=""/>
          </li>
          <li>
          <img src={Person} alt=""/>
          <p> Notification from Guest <br/> منذ 4 ساعات</p>  

           <img src={Image} alt=""/>
          </li>
          <li>
          <img src={Person} alt=""/>
          <p> Notification from Guest <br/> منذ 4 ساعات</p>  
           <img src={Image} alt=""/>
          </li>
          <li>
          <img src={Person} alt=""/>
          <p> Notification from Guest <br/>منذ 4 ساعات</p>  
           <img src={Image} alt=""/>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarComponent;
