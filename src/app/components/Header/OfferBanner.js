import React,{ useState } from "react";
import { Button, Modal } from "react-bootstrap";

const OfferBanner = () => {
    const [showModal, setShowModal] = useState(false);

    return <div className="offer-banner">
        Free shipping when you spend $500+ 
        <span className="details-link" onClick={() => setShowModal(true)}>Details</span>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>Spend $500 and more......Have a free shipping!!!</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" size="sm" onClick={() => setShowModal(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
}

export default OfferBanner;