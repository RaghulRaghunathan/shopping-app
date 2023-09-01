import React, {useState, useContext} from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AppContext } from "../../../App";

const ReviewModal = (props) => {
    const initialState = {ratingCount: 0, reviewTitle: "", reviewMessage: "", author:""};
    const [state, setState] = useState(initialState);
    const useAppContext = useContext(AppContext);

    const handleChange = (key, value) => {
        setState({...state,[key]: value});
    }

    const handleAddReview = () => {
        useAppContext.handleAddReview(state);
        props.setShowModal(false);
        setState(initialState);
    }

    return <Modal show={props.showModal} onHide={() => props.setShowModal(false)} className="add-review-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Add Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Rate this product</Form.Label>
                            <div className="rating">
                                {[1,2,3,4,5].map(item => <i key={item}
                                className={`fa fa-star ${state.ratingCount >= item && "active"}`} 
                                aria-hidden="true" onClick={() => handleChange("ratingCount",item)}/>)}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control as="textarea" rows={2} 
                            onChange={(e) => handleChange("reviewTitle",e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} 
                            onChange={(e) => handleChange("reviewMessage",e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" size="sm" onClick={() => props.setShowModal(false)}>Close</Button>
                    <Button variant="success" size="sm" onClick={handleAddReview}>Add</Button>
                </Modal.Footer>
            </Modal>
}

export default ReviewModal;