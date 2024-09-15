import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTheme } from "./ThemeContext";
import { Modal, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaAt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCopy, FaRegMoneyBillAlt } from "react-icons/fa";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#333" : "#f5f5f5";
  }, [isDarkMode]);

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("S4PY3LB7");
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };
  return (
    <div className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="navbar-right">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="ابحث برقم الطلب، اسم العميل، رقم الشحنة"
          />

          <div className="navbar-icon">
            <i className="multi-order-search-tooltip sicon-info"></i>
          </div>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle dropbtn"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              الطلبات
            </a>
            <ul className="dropdown-menu" style={{ textAlign: "center" }}>
              <li>
                <a className="dropdown-item" href="#">
                  الطلبات
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  المنتجات
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  العملاء
                </a>
              </li>
            </ul>
          </li>
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="navbar-left">
        <div className="navbar-icon-circle" onClick={handleModalShow}>
          <i className="fa-solid fa-gift"></i>
        </div>
        <div className="navbar-icon-circle" onClick={toggleTheme}>
          <i className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
        </div>
        <div className="navbar-icons">
          <a
            className="nav-link"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ marginRight: "10px" }}
          >
            <i className="far fa-user"></i>
          </a>
          <ul className="dropdown-menu" style={{ textAlign: "center" }}>
            <li>مدير المتجر</li>
            <li style={{ textAlign: "center" }}>
              <a className="dropdown-item" href="#" >
                الملف الشخصي <i className="far fa-user"></i>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                تسجيل الخروج{" "}
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </a>
            </li>
          </ul>
          <span className="navbar-title">مدير المتجر</span>
        </div> 
      </div>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
      >
        <div className="modal-header">
          <Button
            variant="link"
            onClick={handleModalClose}
            className="close-button"
          >
            &times;
          </Button>

          <h4>نقاط الولاء</h4>
        </div>

        <Modal.Body className="text-center">
          {copySuccess && <p className="copy-success">تم نسخ الكربون</p>}
          <p className="navbar-inviteText">
            اكسب نقاط عن كل دعوة لانشاء متجر جديد
          </p>
          <div
            className={`invite-code-box ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
          >
            <div className="CopyClass">
              <i
                className="sicon-swap-stroke navbar-copy-icon"
                onClick={handleCopy}
              ></i>
            </div>
            <div>
              <h2 className="navbar-code">S4PY3LB7</h2>
            </div>
            <div>
              <i className="sicon-discount-coupon navbar-icon-discount" ></i>
            </div>
          </div>
          <div className="navbar-socialIcons">
            <FaAt size={20} className="navbar-icon" />
            <FaFacebook size={20} className="navbar-icon" />
            <FaTwitter size={20} className="navbar-icon" />
            <FaWhatsapp size={20} className="navbar-icon" />
            <FaTelegram size={20} className="navbar-icon" />
          </div>
          <p className="navbar-loyaltyText">نقاط الولاء الحالية</p>
          <h2 className="navbar-points">0</h2>
          <div className="navbar-links">
            <a href="#" className="navbar-link">
              اسئله واجوبة
            </a>
            <a href="#" className="navbar-link">
              سجل نقاط
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#f2f5f7"}}> 
          <Button
            variant="secondary"
            onClick={handleModalClose}
            className="close-btn"
            
          >
            اغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
