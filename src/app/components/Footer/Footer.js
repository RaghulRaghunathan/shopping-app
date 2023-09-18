import React, { useMemo, useState } from 'react';
import { Row,Col, Button, Modal, Form, Accordion } from "react-bootstrap";
import { useHistory,matchPath } from 'react-router-dom';
import Review from '../Body/Product/Chairs/Review';

const productJson = require('../../../products.json');
const productTypes = [];

Object.keys(productJson).forEach(item1 => {
    const products = productJson[item1];
    products.forEach(item2 => {
        productTypes.push(item2);
    })
})

const Footer = () => {
    const [mail, setMail] = useState("");
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();
    const [validated, setValidated] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
        setMail("");
        setValidated(false);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) setShowModal(true);
        setValidated(true);
    };

    const getIsProductType = (pathname) => {
        const matchParams = matchPath(pathname, {
            path: `/:typeId?`,
            exact: false,
            strict: false
        });

        return  matchParams.params.typeId === "product"
    }

    const isProduct = useMemo(() => getIsProductType(history.location.pathname),[history.location.pathname])

    return <><div className="footer">
        <Row className="m-0">
            <Col lg={5} md={5} sm={5} className="quick-links p-0">
                <Row className="title m-0">QUICK LINKS</Row>
                <Row className="link-items m-0">
                    <Col className="p-0">
                    {productTypes.map(item => <div 
                        key={item.id} className="item"
                         onClick={() => history.push(`/product/${item.name}/${item.id}`)}>
                            {item.displayName}
                        </div>)}
                    </Col>
                    <Col className="p-0">
                        {[{id:1,key:"about-us",label:"About Us"},
                        {id:2,key:"customer-service",label:"Customer Service"},
                        {id:3,key:"order-returns",label:"Orders and Returns"},
                        {id:4,key:"privacy-policy",label:"Privacy and Cookie ploicy"}].map(item => <div 
                        key={item.id} className="item" onClick={() => history.push(`/${item.key}`)}>
                            {item.label}
                        </div>)}
                    </Col>
                </Row>
            </Col>
            <Col className="subscribe p-0" >
                <Row className="title m-0">JOIN OUR MAILING LIST</Row>
                <Row className="user-input m-0">
                    <Form className="d-flex p-0" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail1">
                        <Form.Control type="email" 
                            placeholder="Enter your email address" 
                            style={{width : "300px"}}
                            onChange={e => {setMail(e.target.value)}}
                            value={mail}
                            required
                        />
                        <Form.Control.Feedback type="invalid">Invalid Email.</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="success" type="submit"  disabled={mail.length === 0}>SUBSCRIBE</Button>
                    </Form>
                </Row>
            </Col>
        </Row>
        <Row className="logo m-0">
            <img src={require('../../../assets/images/hon_logo_1.png')} alt="HON" 
            className="p-0"/>
        </Row>
        <Row className="copy-rights m-0">
            <i className="fa fa-copyright" aria-hidden="true"> 2020 HON, All rights Reserved</i>
        </Row>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>You Mail Id is subscribed successfully!!!</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" size="sm" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
    <div className="footer-mobile">
        <Accordion>
            {isProduct && <>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Details</Accordion.Header>
                    <Accordion.Body>
                    <div className="coming-soon">Coming Soon...</div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Dimensions</Accordion.Header>
                    <Accordion.Body>
                    <div className="coming-soon">Coming Soon...</div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Reviews</Accordion.Header>
                    <Accordion.Body>
                        <Review/>
                    </Accordion.Body>
                </Accordion.Item>
            </>}
            <Accordion.Item eventKey="4">
                <Accordion.Header>Quick Links</Accordion.Header>
                <Accordion.Body>
                    <Row className="link-items">
                    {productTypes.map(item => <div 
                        key={item.id} className="item" onClick={() => history.push(`/product/${item.name}/${item.id}`)}>
                            {item.displayName}
                        </div>)}
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Contact</Accordion.Header>
                <Accordion.Body>
                <Row className="contact-items">
                    {[{id:1,key:"about-us",label:"About Us"},
                    {id:2,key:"customer-service",label:"Customer Service"},
                    {id:3,key:"order-returns",label:"Orders and Returns"},
                    {id:4,key:"privacy-policy",label:"Privacy and Cookie ploicy"}].map(item => <div 
                    key={item.id} className="item" onClick={() => history.push(`/${item.key}`)}>
                         {item.label}
                    </div>)}
                </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Col className="subscribe p-0" >
            <Row className="title m-0">JOIN OUR MAILING LIST</Row>
            <Row className="user-input m-0">
                <Col  lg={8} md={8} sm={12}>
                    <Form className="d-flex p-0" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail2" style={{width: "100%"}}>
                            <Form.Control type="email" 
                                placeholder="Enter your email address" 
                                onChange={e => {setMail(e.target.value)}}
                                value={mail}
                            />
                        </Form.Group>
                    </Form>
                </Col>
                <Col  lg={4} md={4} sm={12} className="subscribe-btn">
                    <Button variant="success" type="submit" disabled={mail.length === 0}>SUBSCRIBE</Button>
                </Col>
            </Row>
        </Col>
        <Row className="logo m-0">
            <img src={require('../../../assets/images/hon_logo_1.png')} alt="HON" 
            className="p-0"/>
        </Row>
        <Row className="copy-rights m-0">
            <i className="fa fa-copyright" aria-hidden="true"> 2020 HON, All rights Reserved</i>
        </Row>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>You Mail Id is subscribed successfully!!!</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" size="sm" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
    </>
}

export default Footer;