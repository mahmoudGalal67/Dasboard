import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import {
    FaPlus,
    FaFilter,
    FaTools,
    FaClipboardCheck,
} from "react-icons/fa";
import './RequestHead.css';
import { Modal,Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const RequestHead = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const handleShowFilterModal = () => setShowFilterModal(true);
    const handleCloseFilterModal = () => setShowFilterModal(false);
    
    return (
        <div>
            <div className="header-container">
                <div className="header-right">
                    <Button className="btn-add-product">
                        <span className="spanIcon" style={{ backgroundColor: "white" }}>
                            <FaPlus className="icon-plus" />
                        </span>
                        إضافة منتج جديد
                    </Button>
                </div>
                <div className="header-left">
                    <Button className="btn-filter" >
                        <FaClipboardCheck className="icon" />
                        الحجوزات
                    </Button>
                    <Button className="btn-services" onClick={handleShowFilterModal}>
                        <FaFilter className="icon" />  تصفية
                    </Button>
                    <Button className="btn-services">
                        <FaTools className="icon" /> خدمات
                    </Button>
                </div>
            </div>

            <Modal
                show={showFilterModal}
                onHide={handleCloseFilterModal}
                dialogClassName="full-screen-modal"
            >
                <Modal.Body
                    className="custom-scroll"
                    style={{
                        height: "100vh",
                        overflowY: "auto",
                        direction: "rtl",
                    }}
                >
                    <div style={{ textAlign: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <h4>فرز الطلبات حسب</h4>
                            <div className="close-button-class">
                                <Button
                                    variant="link"
                                    onClick={handleCloseFilterModal}
                                    className="close-button-filter"
                                >
                                    &times;
                                </Button>
                            </div>
                        </div>
                        <Accordion defaultActiveKey="0" className="custom-accordion">
                            <Accordion.Item eventKey="" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                   حالة الطلب
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                شركة الشحن
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                            
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                        {" "}
                                        لم يتم قرائتها
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                             
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                       طريقة الدفع
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                
                                </Accordion.Body>
                            </Accordion.Item>{" "}
                            <Accordion.Item eventKey="4" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                        الدولة والمدينة
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                               
                                </Accordion.Body>
                            </Accordion.Item>{" "}
                            <Accordion.Item eventKey="5" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                           الفرع
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                
                                </Accordion.Body>
                            </Accordion.Item>{" "}
                            <Accordion.Item eventKey="6" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                     ترتيب الطلبات
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                
                                </Accordion.Body>
                            </Accordion.Item>{" "}
                            <Accordion.Item eventKey="7" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                       طلبات الموظف
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                               
                                </Accordion.Body>
                            </Accordion.Item>{" "}

                            <Accordion.Item eventKey="8" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                       قنوات البيع
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                               
                                </Accordion.Body>
                            </Accordion.Item>{" "}
                            <Accordion.Item eventKey="9" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                       تاريخ الطلب
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                            
                                </Accordion.Body>
                            </Accordion.Item>{" "}
                            <Accordion.Item eventKey="10" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                      الوسوم
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                
                                </Accordion.Body>
                            </Accordion.Item>{" "}

                            <Accordion.Item eventKey="11" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                       المنتجات
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                         
                                </Accordion.Body>
                            </Accordion.Item>{" "}
                        </Accordion>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px",
                        }}
                    >
                        <Button
                            variant="primary"
                            style={{
                                backgroundColor: "#82CAFF",
                                border: "none",
                                width: "160px",
                            }}
                        >
                            عرض النتائج
                        </Button>
                        <Button
                            variant="secondary"
                            style={{
                                border: "none",
                                margin: "0 10px",
                                width: "90px",
                            }}
                        >
                            إعادة تعيين
                        </Button>
                    </div>
                    <Button
                        variant="light"
                        style={{
                            border: "1px solid #dee2e6",
                            color: "#6c757d",
                            width: "250px",
                            marginTop: "10px",
                        }}
                       
                    >
                        تصدير النتائج <span className="icon-export" />
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default RequestHead;
