import React, { useState } from "react";
import "./ProductCard.css";
import { MdPhoto } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { MdDelete } from "react-icons/md";
import { FaTrash, FaUpload } from 'react-icons/fa';
function ToggleCheckButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      onClick={handleToggle}
      className={`toggle-button ${isChecked ? "checked" : ""}`}
    >
      {isChecked ? "✔" : " "}
    </button>
  );
}

const ProductCard = ({ imageUrl, price }) => {
  const [productDetails, setProductDetails] = useState({
    language: "AR",
    price: 150,
    quantity: 26,
    description: "هدايا حسب الحدث",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [showModal, setShowModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleOptionsModalClose = () => setShowOptionsModal(false);
  const handleOptionsModalShow = () => setShowOptionsModal(true);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const [uploadedImage, setUploadedImage] = useState(null);
  const handleFiles = (files) => {
    const validFiles = files.filter((file) => file.type.startsWith("image/"));
    if (validFiles.length > 0) {
      const file = validFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const [options, setOptions] = useState([{ color: "", language: "AR" }]);
  const addOption = () => {
    setOptions([...options, { color: "", language: "AR" }]);
  };

  const handleOptionChange = (index, field, value) => {
    const newOptions = [...options];
    newOptions[index][field] = value;
    setOptions(newOptions);
  };

  const [showList, setShowList] = useState(false);

  const addNewOption = () => {
    setShowDeleteButton(true);
    setShowList(true);
    setOptions([
      ...options,
      {
        color: "",
        language: "AR",
      },
    ]);
  };

  const removeOptionList = () => {
    setShowList(false);
    setOptions([]);
  };

  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const removeOptionHeaderList = () => {
    setShowDeleteButton(false);
  };

  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleCategoryModalClose = () => setShowCategoryModal(false);
  const handleCategoryModalShow = () => setShowCategoryModal(true);

  const [isMainCategory, setIsMainCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleMainCategory = () => {
    setIsMainCategory((prev) => !prev);
  };

  const [quantities, setQuantities] = useState([
    { color: "الأبيض", available: 9 },
    { color: "الأسود", available: 6 },
    { color: "الوردي", available: 5 },
    { color: "الأزرق", available: 6 },
  ]);

  const [unlimited, setUnlimited] = useState(false);

  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleDetailsModalClose = () => setShowDetailsModal(false);
  const handleDetailsModalShow = () => setShowDetailsModal(true);

  const [showCustomFields, setShowCustomFields] = useState(false);
  const handleCustomFieldsToggle = () => {
    setShowCustomFields(true);
    setShowFilesSection(false);
  };

  const [showFilesSection, setShowFilesSection] = useState(false);
  const handleFilesToggle = () => {
    setShowFilesSection(true);
    setShowCustomFields(false);
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt="" />
        <button className="upload-icon">
          <ToggleCheckButton />
        </button>
        <div className="media-buttons">
          <div className="right">
            <div className="icon-container">
              <FontAwesomeIcon icon={faThumbtack} />
            </div>
          </div>
          <div className="left">
            <button
              className="add-media-btn"
              style={{ color: "black" }}
              onClick={handleModalShow}
            >
              <MdPhoto className="add-icon" />
              إضافة صورة أو فيديو
            </button>
          </div>
        </div>
      </div>
      <div className="product-details">
        <div className="field">
          <div className="InputClass">
            <input
              type="text"
              placeholder="خدمة حسب الطلب -ادخل اسم المنتج"
              defaultValue="طباعة الملابس"
            />
          </div>
          <div className="selectClass">
            <select
              name="language"
              value={productDetails.language}
              onChange={handleChange}
            >
              <option value="AR">AR</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
        <div className="field">
          <div className="InputNumberClass">
            <input
              type="number"
              name="price"
              value={productDetails.price}
              placeholder="السعر"
              onChange={handleChange}
            />
          </div>
          <div className="labelPriceClass">
            <label>ر.س</label>
          </div>
        </div>
        <div className="field">
          <div className="numberOfQuantity">
            <p>كمية غير محدودة</p>
          </div>
          <div className="icon-1"></div>
          <div className="icon-2"></div>
          <div className="quantityAndChoies" onClick={handleOptionsModalShow}>
            <p style={{ fontSize: "15px" }}>الخيارات والكمية</p>
          </div>
        </div>
        <div className="field">
          <div className="selectClassificationClass">
            <select>
              <option value="">اختر تصنيف المنتج</option>
              <option value="">هدايا موسمية (مخفي)</option>
              <option value="">الشتاء (مخفي)</option>
              <option value="">الصيف (مخفي)</option>
              <option value="">الربيع (مخفي)</option>
              <option value="">كفر جوال هدية</option>
            </select>
          </div>
          <div
            className="classificationNameClass"
            onClick={handleCategoryModalShow}
          >
            <p>تصنيف</p>
          </div>
        </div>
        <div className="field">
          <div className="DetailsClass" onClick={handleDetailsModalShow} style={{ cursor: 'pointer' }}>
            <p>بيانات المنتج</p>
          </div>
          <div className="selectDetailsClass">
            <select name="" placeholder="اختر تصنيف المنتج">
              <option value="">المزيد</option>
              <option value="">الشتاء (مخفي)</option>
              <option value="">الصيف (مخفي)</option>
              <option value="">الربيع (مخفي)</option>
              <option value="">كفر جوال هدية</option>
            </select>
          </div>
        </div>
        <button className="save-button">حفظ</button>
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
          <h4 style={{ color: "#5666ab" }}>صور وفيديوهات المنتج</h4>
        </div>
        <Modal.Body className="photoPopup">
          <div className="head-section">
            <h4>صور المنتج</h4>
            <p>
              لمقاس لا يقل عن (100px ارتفاع * 250px عرض) من نوع ( jpg, jpeg, png
              , gif ) ولا يتجاوز 5 ميجابيت لكل صوره بحد اقصي 10 صور
            </p>
          </div>
          <div
            className="image-upload-area"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              style={{ display: "none" }}
              id="file-input"
            />
            <label htmlFor="file-input" style={{ cursor: "pointer" }}>
              <div className="upload-button">
                <p>اسحب الصورة وأفلتها هنا</p>
                <p style={{ marginTop: "-18px" }}> او تصفح من جهازك</p>
              </div>
            </label>
          </div>
          {uploadedImage && (
            <div className="uploaded-image">
              <img src={uploadedImage} alt="Uploaded" />
            </div>
          )}

          <div className="input-container">
            <button className="input-button">
              <i className="icon-class">اضافة</i>
            </button>
            <input
              type="text"
              className="text-input"
              placeholder="أضف تعليقاً أو فيديو من اليوتيوب"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleModalClose}
            className="close-btn"
          >
            اغلاق
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showOptionsModal}
        onHide={handleOptionsModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
      >
        <div className="modal-header">
          <Button
            variant="link"
            onClick={handleOptionsModalClose}
            className="close-button"
          >
            &times;
          </Button>
          <h4>إدارة الكميات - طباعة على الحقائب</h4>
        </div>
        <Modal.Body style={{ direction: "rtl" }}>
          <div
            style={{
              width: "100%",
              border: "1px solid blue",
              padding: "3px",
              backgroundColor: "rgb(167, 168, 180, 0.33)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                color: "blue",
                width: "25px",
                height: "25px",
              }}
            />
            <p style={{ marginTop: "9px", marginLeft: "10px" }}>
              يمكنك إدارة الكمية بناءً على خيارات المنتج
            </p>
          </div>
          <div className="toggle-switch">
            <label>
              <input
                type="checkbox"
                checked={isToggleOn}
                onChange={() => setIsToggleOn(!isToggleOn)}
              />
              <span className="slider"></span>
            </label>
            <span style={{ marginRight: "10px" }}>تفعيل خيارات المنتج</span>
          </div>
          {isToggleOn && (
            <div>
              <div className="option-list">
                <div className="option-container toggleheader-section">
                  <div className="right-toggleHeader">
                    <input
                      type="text"
                      className="option-input"
                      placeholder="اللون"
                    />
                    <select className="option-select">
                      <option value="AR">AR</option>
                      <option value="EN">EN</option>
                    </select>
                  </div>
                  <div className="left-toggleHeader">
                    <select className="option-select">
                      <option>نص</option>
                      <option>اللون</option>
                      <option>الصورة</option>
                    </select>
                    {showDeleteButton && (
                      <button
                        onClick={removeOptionHeaderList}
                        className="delete-button-list"
                      >
                        <MdDelete />
                      </button>
                    )}
                  </div>
                </div>
                {options.map((option, index) => (
                  <div key={index} className="option-container">
                    <input
                      type="text"
                      className="option-input"
                      placeholder="القيمة"
                      value={option.color}
                      onChange={(e) =>
                        handleOptionChange(index, "color", e.target.value)
                      }
                    />
                    <select
                      className="option-select"
                      value={option.language}
                      onChange={(e) =>
                        handleOptionChange(index, "language", e.target.value)
                      }
                    >
                      <option value="AR">AR</option>
                      <option value="EN">EN</option>
                    </select>

                    <button
                      className="delete-button"
                      onClick={() =>
                        setOptions(options.filter((_, i) => i !== index))
                      }
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))}
                <button onClick={addOption} className="add-option-button">
                  <span className="plus-icon">+</span> إضافة قيمة جديدة
                </button>
              </div>
              {showList && (
                <div className="option-list">
                  <div className="option-container toggleheader-section">
                    <div className="right-toggleHeader">
                      <input
                        type="text"
                        className="option-input"
                        placeholder="اللون"
                      />
                      <select className="option-select">
                        <option value="AR">AR</option>
                        <option value="EN">EN</option>
                      </select>
                    </div>
                    <div className="left-toggleHeader">
                      <select className="option-select">
                        <option>نص</option>
                        <option>اللون</option>
                        <option>الصورة</option>
                      </select>
                      {showList && (
                        <button
                          onClick={removeOptionList}
                          className="delete-button-list"
                        >
                          <MdDelete />
                        </button>
                      )}
                    </div>
                  </div>
                  {options.map((option, index) => (
                    <div key={index} className="option-container">
                      <input
                        type="text"
                        className="option-input"
                        placeholder="اللون"
                        value={option.color}
                        onChange={(e) =>
                          handleOptionChange(index, "color", e.target.value)
                        }
                      />
                      <select
                        className="option-select"
                        value={option.language}
                        onChange={(e) =>
                          handleOptionChange(index, "language", e.target.value)
                        }
                      >
                        <option value="AR">AR</option>
                        <option value="EN">EN</option>
                      </select>

                      <button
                        className="delete-button"
                        onClick={() =>
                          setOptions(options.filter((_, i) => i !== index))
                        }
                      >
                        <MdDelete />
                      </button>
                    </div>
                  ))}

                  <button onClick={addNewOption} className="add-option-button">
                    <span className="plus-icon">+</span> إضافة قيمة جديدة
                  </button>
                </div>
              )}
              <button onClick={addNewOption} className="addNewOption">
                <span className="plus-icon">+</span> إضافة خيار جديد
              </button>

              <Form className="mt-5 quantitiesClass">
                <Form.Group className="mb-3">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <Form.Check
                        type="checkbox"
                        checked={unlimited}
                        onChange={() => setUnlimited(!unlimited)}

                      />
                    </Col>
                    <Col>
                      <Form.Label className="mb-0">
                        الكمية غير محدودة
                      </Form.Label>
                    </Col>
                  </Row>
                </Form.Group>
                {quantities.map((item, index) => (
                  <div key={index} className="d-flex justify-content-between mb-2">
                    <div className="flex-grow-1 bg-light p-2 rounded">
                      <span style={{ fontSize: "10px", border: "1px solid #aaa", padding: "3px", borderRadius: "4px", marginLeft: "5px" }}> +  </span>
                      {item.color}
                    </div>
                    <div className="ms-2 bg-light p-2 rounded text-end" style={{ minWidth: '120px' }}>
                      متوفر عدد {item.available}
                    </div>
                  </div>
                ))}
              </Form>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleOptionsModalClose}
            className="save-btn-options"
          >
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showCategoryModal}
        onHide={handleCategoryModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
        className="CategoryModal"
      >
        <div className="modal-header">
          <Button
            variant="link"
            onClick={handleCategoryModalClose}
            className="close-button"
          >
            &times;
          </Button>
          <h4>إضافة تصنيف جديد</h4>
        </div>
        <Modal.Body>
          <form style={{ direction: "rtl" }}>
            <div>
              <label style={{ marginRight: "16px" }}>اسم التصنيف</label>
              <br />
              <div className="field-category">
                <div className="InputCategoryClass">
                  <input type="text" placeholder="ادخل اسم التصنيف" required />
                </div>
                <div className="selectCategoryClass">
                  <select
                    name="language"
                    value={productDetails.language}
                    onChange={handleChange}
                  >
                    <option value="AR">AR</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{ marginRight: "16px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={isMainCategory}
                  onChange={toggleMainCategory}
                />
                إضافة الي التصنيف رئيسي
              </label>
            </div>
            {isMainCategory && (
              <div style={{ marginRight: "16px", marginTop: "10px" }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">تحديد التصنيف الرئيسي</option>
                  <option value="هدية موسمية">هدية موسمية</option>
                  <option value="الشتاء">الشتاء</option>
                  <option value="الصيف">الصيف</option>
                  <option value="الربيع">الربيع</option>
                  <option value="كفر جوال هدية">كفر جوال هدية</option>
                </select>
              </div>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCategoryModalClose}>
            إلغاء
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleCategoryModalClose}
          >
            إضافة التصنيف
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showDetailsModal}
        onHide={handleDetailsModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999, maxWidth: '80%', width: '80%' }}
        className="DetailsModalClass"
      >
        <div className="modal-header">
          <Button
            variant="link"
            onClick={handleDetailsModalClose}
            className="close-button"
          >
            &times;
          </Button>
          <h4>(netflix) بيانات المنتج</h4>
        </div>
        <div className="modal-subheader">
          <Button
            variant="outline-secondary"
            onClick={handleFilesToggle}
            className="subheader-button"
          >
            الملفات المرفقة
          </Button>
          <Button variant="outline-secondary" onClick={handleCustomFieldsToggle} className="subheader-button">
            الحقول المخصصة
          </Button>
          <Button variant="outline-secondary" className="subheader-button">بيانات المنتج</Button>
        </div>
        <Modal.Body className="DetailsBodyClass">
          {showFilesSection && (
            <div>
              <div style={{color:"#aaa",fontSize:"13px"}}>
              <p>هناك طريقتين لرفع الملفات الرقمية:</p>
              <p>1. رفع الملف: والذي يتيح لك رفع الملفات من جهازك حتى حجم 100 ميجا</p>
              <p>2. رابط الملف: بامكانك رفع الملفات الكبيرة على خدمات التخزين السحابية ثم اضافة الرابط</p>
              </div>
            <div className="file-upload-section">
              <div className="form-group" style={{display:"flex",backgroundColor:"white"}}>
                <div className="InputDetailsClass" style={{width:"80%"}}>
                  <input type="text" placeholder="اسم الملف" required style={{width:"100%",outline:"none",border:"none"}} />
                </div>
                <div className="selectDetailsClass" style={{width:"15%"}}>
                  <select
                    name="language"
                    value={productDetails.language}
                    onChange={handleChange}
                    style={{width:"100%", outline:"none",border:"none",marginTop:"3px"}}
                  >
                    <option value="AR">AR</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>

              <div className="form-group d-flex"  style={{display:"flex",backgroundColor:"white", marginTop:"5px"}}>
                <div style={{width:"40%"}}>
                <Button variant="outline-secondary" className="mr-2" style={{width:"100%", outline:"none",border:"none"}}>
                  <FaUpload className="mr-1" /> رفع الملف
                </Button>
                </div>
                <div style={{width:"40%", outline:"none",border:"none",marginTop:"3px"}}>
                <Form.Control type="file" style={{ display: 'none' }} id="fileUpload" />
                <Form.Label htmlFor="fileUpload" className="file-upload-label" style={{width:"100%", outline:"none",border:"none",marginTop:"3px"}}>
                  اختر الملف
                </Form.Label>
                </div>
                <div style={{width:"15%", outline:"none",border:"none",marginTop:"3px"}}>
                <Button variant="outline-secondary" className="mr-2" style={{width:"100%", outline:"none",border:"none"}}>
                  استعراض
                </Button>
                </div>

              </div>
        

              <Button variant="danger" className="delete-button mt-2">
                <FaTrash className="mr-1" /> حذف الملف
              </Button>
            </div>
            </div>
          )}
          {showCustomFields && (
            <div className="form-group">
              <select className="custom-select">
                <option value="">اضافة قسم</option>
                <option value="">لا يوجد حقول متاحة</option>

              </select>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(170 170 170 / 13%)" }}>
          <div className="footerDetailsClass">
            <div>
              <Button variant="secondary" onClick={handleDetailsModalClose}>إلغاء</Button>
            </div>
            <div>
              <Button variant="primary">حفظ بيانات المنتج</Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>


    </div>
  );
};

export default ProductCard;
