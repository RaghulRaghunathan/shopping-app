import React, {useState, useContext} from "react";
import { Button, Row, Col} from "react-bootstrap";
import { AppContext } from "../../../App";
import ReviewModal from "./ReviewModal";

const Review = () => {
    const [showModal, setShowModal] = useState(false);
    const useAppContext = useContext(AppContext);

    return <><div id="review" className="details">
            {useAppContext.reviews.map(item => <div key={item.reviewId} className="item-info">
                <Row className="item d-flex">
                    <Col className="rating" xs={4} lg={2} md={3} sm={4}>
                    {[1,2,3,4,5].map(id => <i key={id}
                        className={`fa fa-star ${item.ratingCount >= id && "active"}`} 
                        aria-hidden="true"/>)}
                    </Col>
                    <Col className="message-info">
                        <div className="message-title">{item.reviewTitle}</div>
                        <div className="message">{item.reviewMessage}</div>
                    </Col>
                    <Col className="date-info">
                        <div className="date">July 12,2020</div>
                        <div className="reviewer-name">Written by <span>Jones</span></div>
                    </Col>     
                </Row>
                <div className="splitter"></div>
            </div>)}
        </div>
        <div className="add-review-btn">
            <Button variant="outline-success" onClick={() => setShowModal(true)}>Add a review</Button>
            <ReviewModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    </>
}

export default Review;