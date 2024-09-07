import React, { useState } from "react";
import "./ProductCard.css";
import { MdPhoto } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { MdDelete } from "react-icons/md";

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
          <div className="classificationNameClass">
            <p>تصنيف</p>
          </div>
        </div>
        <div className="field">
          <div className="DetailsClass">
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
    </div>
  );
};

export default ProductCard;
