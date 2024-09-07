import React, { useState } from 'react';
import './SummaryComponent.css';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SummaryComponent = () => {
  const [goal, setGoal] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSave = () => {
    console.log("Goal saved:", goal);
    handleClose();
  };

  return (
    <div className="summary-section">
      <div className="summary-section-head">
         <div>
         <h4 >ملخص الشهر</h4>
         </div>
         <div>
           <p>سبتمبر 2024</p>
         </div>

      </div>
      <div className="summary-details" >
      
      <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"70px"}}>
        <div><i className="fa-regular fa-user icons"></i><span> زيارات </span></div>
         <div ><i className="fa-solid fa-sack-dollar icons"></i><span>المبيعات</span> </div>
       </div>
       <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div> <i className="fa-regular fa-folder-closed icons"></i> <span>طالبات</span></div>
        <div onClick={handleShow} style={{cursor:"pointer"}}><i className="fa-solid fa-trophy icons-open"></i> <span>هدف الشهر</span></div>
      </div>
      </div>
      <a href="#">المزيد من التقارير</a>

      <Modal show={showModal} centered className="custom-modal">
      <Modal.Header>
        <Modal.Title style={{ textAlign: 'right'}}>
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: 'right' }}>
      <span style={{ marginRight: '10px', fontSize: '24px' }}>💰 حدد الهدف الذي تطمح لتحقيقه في المبيعات</span>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          
          <Form.Control
            type="text"
            placeholder="0"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            style={{direction:"rtl"}}
          />
        </div>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: 'space-between' }}>
        <Button variant="secondary" onClick={handleClose}>
          تراجع
        </Button>
        <Button variant="primary" onClick={handleSave}
          style={{
              backgroundColor: "#b7f7e5",
              border: "none",
              color: "black",
            }}>
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>

    </div>
  );
};

export default SummaryComponent;
