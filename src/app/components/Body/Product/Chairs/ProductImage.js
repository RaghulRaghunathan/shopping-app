import React, {useState} from "react";
import { Row,Col } from "react-bootstrap";

const ProductImage = (props) => {
    const {activeProductInfo} = props;
    const [activeImageId, setActiveImageId] = useState(1);

    const handleSwitchImage = (type) => {
        if(type === "prev"){
            const id = activeImageId - 1;
            id >= 1 ? setActiveImageId(id) : setActiveImageId(3);
        }else{
            const id = activeImageId + 1;
            id <= 4 ? setActiveImageId(id) : setActiveImageId(1);
        }
    }

    return activeProductInfo && <Col lg={6} md={9} sm={12} className="product-img p-0">
        <Row className="m-0">
            <div className="main-image-container d-flex p-0">
                <div className="prev-btn" onClick={() => handleSwitchImage("prev")}><i className="fa fa-angle-left" aria-hidden="true"></i></div>
                <img src={require(`../../../../../assets/images/${activeProductInfo.id}-${activeImageId}.jpeg`).default} alt="Chair" className="main-img"/>
                <div className="next-btn" onClick={() => handleSwitchImage("next")}><i className="fa fa-angle-right" aria-hidden="true"></i></div>
            </div>
        </Row>
        <Row className="m-0">
            <div className="img-items d-flex">
                {[1,2,3,4].map(item => <img 
                key={item}
                src={require(`../../../../../assets/images/${activeProductInfo.id}-${item}.jpeg`).default} 
                alt="Chair" className={`img-item ${activeImageId === item && "active"}`}
                onClick={() => setActiveImageId(item)}
                />)}
            </div>
            <p className="image-doc">
            {[1,2,3,4].map(item => <i key={item} className={`fa ${item === activeImageId ? "fa-circle " : "fa-circle-o"}`} 
            aria-hidden="true" onClick={() => setActiveImageId(item)}></i>)}
            </p>
        </Row>
    </Col>
}

export default ProductImage;