import React from 'react';
import './SidebarComponent.css';
import Person from "./IMG/avatar_male.webp";
import Image1 from "./IMG/CBhwrVmatdqv6aUFxXpBM9fiLdBtIgEyPwttRlED.webp";
import Image2 from "./IMG/ci8nn0A10bn2Eymlz7BCpTk0xIl3upJGOt2UzfMo.webp";
import Image3 from "./IMG/D5QVPx3cjw7ksoQIfTowAiVZZeBYqHFKJb8nVsUl.webp";
import Image4 from "./IMG/ls1vhvNOIdKm7LvFFPgWYmtju50ce8FBsMdVLMSI.webp";


const SidebarComponent = () => {
  return (
    <aside className="sidebar">
      <div className="notifications">

        <h5> <i class="fa-regular fa-bell mx-3"></i>التنبيهات</h5>
        <ul>
          <li>
            <img src={Person} alt="" className='Person' />
            <p> زائر اضاف خاتم ميلر للسلة <br /> منذ 4 ساعات</p>

            <img src={Image1} alt="" className='Image' />
          </li>
          <li>
            <img src={Person} alt="" />
            <p> زائر اضاف خاتم ميلر للسلة <br /> منذ 4 ساعات</p>


            <img src={Image2} alt="" />
          </li>
          <li>
            <img src={Person} alt="" />
            <p> زائر اضاف خاتم ميلر للسلة <br /> منذ 4 ساعات</p>


            <img src={Image3} alt="" />
          </li>
          <li>
            <img src={Person} alt="" />
            <p> زائر اضاف خاتم ميلر للسلة <br /> منذ 4 ساعات</p>


            <img src={Image3} alt="" />
          </li>
          <li>
            <img src={Person} alt="" />
            <p> زائر اضاف خاتم ميلر للسلة <br /> منذ 4 ساعات</p>


            <img src={Image1} alt="" />
          </li>
          <li>
            <img src={Person} alt="" />
            <p> زائر اضاف خاتم ميلر للسلة <br /> منذ 4 ساعات</p>


            <img src={Image1} alt="" />
          </li>
        </ul>
      </div>
      <div className="missed-products">
        <h5> <i class="fa-solid fa-triangle-exclamation ms-3"></i> منتجات نفذت</h5>
        <ul>
          <li style={{marginLeft:"100px"}}>
            <img src="" alt="" />
            <p>
              <span style={{ color: "red" }}>
                netflix
              </span>
              <br />
              SAR 23
            </p>
          </li>
          <li>
            <img src={Image4} alt="" />
            <p>
              <span style={{ color: "red" }}>
                عطر انتنس عود من قوتشي - 90 مل  - او دو برفيوم
              </span>
              <br /> SAR 802</p>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarComponent;
