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
const RequestHead = () => {
    return (
        <div>
            <div className="header-container">
                <div className="header-right">
                    <Button className="btn-add-product">
                        <span className="spanIcon" style={{backgroundColor:"white"}}>
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
                    <Button className="btn-services">
                        <FaFilter className="icon" />  تصفية
                    </Button>
                    <Button className="btn-services">
                        <FaTools className="icon" /> خدمات
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default RequestHead;
