import React,{useState, useMemo, useContext} from "react";
import { Col, Button, Row } from "react-bootstrap";
import { useHistory,matchPath } from "react-router-dom";
import ReactSelect from 'react-select';
import { AppContext } from "../../../App";
import ReviewModal from "./ReviewModal";

const ProductDetails = (props) => {
    const { setActiveProduct, activeProductInfo, productList} = props;
    const [quantity, setQuality] = useState({value:"1",label: "1"});
    const [showModal, setShowModal] = useState(false);

    const history = useHistory();
    const useAppContext = useContext(AppContext);

    const matchParams = matchPath(history.location.pathname, {
        path: `/product/:type?/:typeId?/:productId?/:colorId?`,
        exact: false,
        strict: false
    });

    const getAverageRatingCount = (list) => {
        const totalCount = list.reduce((sumValue, item) => item.ratingCount + sumValue, 0);
        return totalCount > 0 ? totalCount/list.length : 0 ;
    }

    const averageRatingCount = useMemo(() => getAverageRatingCount(useAppContext.reviews), [useAppContext.reviews]);

    const productDetails = productList[0];
    const {type, typeId, productId} = matchParams.params;

    return activeProductInfo && <Col className="product-details p-0">
        <div className="info">
            <div className="title">Traction</div>
            <div className="sub-title">{productDetails.productName}</div>
            <div className="powered-by">Produced by HON</div>
            <Row className="review d-flex">
                <Col className="rating" lg={4} md={4} sm={4}>
                    {[1,2,3,4,5].map(id => <i key={id}
                        className={`fa fa-star ${averageRatingCount >= id && "active"}`} 
                        aria-hidden="true"/>)}
                </Col>
                <Col className="review-count" lg={3} md={3} sm={3}>
                    <a href="#review"> {`${useAppContext.reviews.length} review`}</a>
                </Col>
                <Col className="add-btn" lg={3} md={3} sm={3} onClick={() => setShowModal(true)}>Add a review</Col>
                <ReviewModal showModal={showModal} setShowModal={setShowModal}/>
            </Row>
        </div>
        <div className="color-info">
            <div className="title">Color: <span>{activeProductInfo.colorLabel}</span></div>
            <div className="items d-flex">
                {productList.map(item =>  <div key={item.id} className="item" onClick={() => {
                    setActiveProduct(item);
                    history.push(`/product/${type}/${typeId}/${productId}/${item.id}`)
                    }}>
                    <div className={`color ${activeProductInfo.id === item.id && "active"}`}
                     style={{backgroundColor: item.colorCode}}></div>
                    <div className="name">{item.colorLabel}</div>
                </div>)}
            </div>
        </div>
        <div className="price-info">
            <div className="title">Retail Price:</div>
            <div className="price">
                <span className="price-value">
                    {`$${activeProductInfo.price - Math.round(activeProductInfo.price * activeProductInfo.offer/100)}.00`}</span>
                <span className="mrp-price">{`$${activeProductInfo.price}.00`}</span>
                <span className="offer">{`${activeProductInfo.offer}% off`}</span></div>
            <div className="item-id">{`Item # ${activeProductInfo.id}`}</div>
            <div className="splitter"/>
        </div>
        <div className="user-selection">
            <div className="title">Quantity</div>
            <Row className="user-input m-0">
                <Col className="quantity-select p-0" lg={6} md={6} sm={12}>
                    <ReactSelect
                        options={[{value:"1",label: "1"},{value:"2",label: "2"},{value:"3",label: "3"},
                        {value:"4",label: "4"},{value:"5",label: "5"}]}
                        onChange={(e) => setQuality(e)}
                        defaultValue={quantity}
                        value={quantity}
                        className="select-btn"
                        isDisabled={Object.keys(useAppContext.addedCartList).indexOf(activeProductInfo.id) >= 0}
                        >
                    </ReactSelect>
                </Col>
                <Col className="add-to-cart-btn p-0" lg={6} md={6} sm={12}>
                    <Button disabled={Object.keys(useAppContext.addedCartList).indexOf(activeProductInfo.id) >= 0}
                    variant={`${Object.keys(useAppContext.addedCartList).indexOf(activeProductInfo.id) >= 0 ? "outline-success" : "success"}`} 
                        onClick={() => useAppContext.setCartList(activeProductInfo.id,quantity.value)}>
                        {Object.keys(useAppContext.addedCartList).indexOf(activeProductInfo.id) >= 0 ?"ITEM IN CART": "ADD TO CART"}
                    </Button>
                </Col>
            </Row>
            <div className="add-wishlist">
                <i className={`fa ${useAppContext.addedWishlist.indexOf(activeProductInfo.id) >= 0 
                ? "fa-heart active" : "fa-heart-o"}`} aria-hidden="true" 
                onClick={() => useAppContext.setWishList(activeProductInfo.id)}></i>
                <span onClick={() => useAppContext.setWishList(activeProductInfo.id)}>
                    {useAppContext.addedWishlist.indexOf(activeProductInfo.id) >= 0 ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}</span>
            </div>
        </div>
    </Col>
}

export default ProductDetails;