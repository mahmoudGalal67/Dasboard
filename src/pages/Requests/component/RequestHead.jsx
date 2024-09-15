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
import { Modal, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const RequestHead = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const handleShowFilterModal = () => setShowFilterModal(true);
    const handleCloseFilterModal = () => setShowFilterModal(false);

    const requestStatuses = [
        "الكل",
        "مسودة",
        "محذوف",
        "بانتظار الدفع",
        "بانتظار المراجعة",
        "قيد التنفيذ",
        "تم التنفيذ",
        "جاري التوصيل",
        "تم التوصيل",
        "تم الشحن",
        "ملغي",
        "مسترجع",
        "قيد الاسترجاع",
        "طلب عرض السعر",
    ];
    const [checkedItems, setCheckedItems] = useState({});
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };
    const shippingCompany = [
        "الكل",
        "مندوب مكة",
        "ارامكس",
        "سمسا",
        "DHL Express",
        "البريد السعودي | شبل",
        "اي مكان",
        "برق",
        "كريم",
        "ريدبوكس",
        "أفق السرعة",
    ];
    const requestType = [
        "الكل",
        "طلب مباشر",
        "تبرع سريع",
    ];
    const paymentMethod = [
        "الكل",
        "الدفع عند الاستلام",
        "البطاقة الإتمانية",
        "مدى",
        "قوقل باي",
        "تمارا",
        "تابي",
        "ام اي اس باي",
        "كي نت",
    ];

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
                        <i className="sicon-calendar-date icon-calender"></i>
                        الحجوزات
                    </Button>
                    <Button className="btn-services" onClick={handleShowFilterModal}>
                        <i className="sicon-filter icon-filter"></i>  تصفية
                    </Button>
                    <Button className="btn-services">
                        <i className="sicon-toolbox icon-toolbox"></i> خدمات
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
                                    <Form>
                                        {requestStatuses.map((type, index) => (
                                            <div key={index} style={{ textAlign: "right" }}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name={type}
                                                        checked={!!checkedItems[type]}
                                                        onChange={handleCheckboxChange}
                                                        style={{ marginLeft: "10px" }}
                                                    />
                                                    {type}
                                                </label>
                                            </div>
                                        ))}
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                        شركة الشحن
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {shippingCompany.map((type, index) => (
                                        <div key={index} style={{ textAlign: "right" }}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name={type}
                                                    checked={!!checkedItems[type]}
                                                    onChange={handleCheckboxChange}
                                                    style={{ marginLeft: "10px" }}
                                                />
                                                {type}
                                            </label>
                                        </div>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                        {" "}
                                        نوع الطلب
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        {requestType.map((type, index) => (
                                            <div key={index} style={{ textAlign: "right" }}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name={type}
                                                        checked={!!checkedItems[type]}
                                                        onChange={handleCheckboxChange}
                                                        style={{ marginLeft: "10px" }}
                                                    />
                                                    {type}
                                                </label>
                                            </div>
                                        ))}
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" style={{ border: "none" }}>
                                <Accordion.Header>
                                    <div style={{ flexGrow: 1, textAlign: "right" }}>
                                        طريقة الدفع
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        {paymentMethod.map((type, index) => (
                                            <div key={index} style={{ textAlign: "right" }}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name={type}
                                                        checked={!!checkedItems[type]}
                                                        onChange={handleCheckboxChange}
                                                        style={{ marginLeft: "10px" }}
                                                    />
                                                    {type}
                                                </label>
                                            </div>
                                        ))}
                                    </Form>
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
