import React,{ useState, useContext, useEffect } from 'react';
import { Badge, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useHistory,matchPath } from 'react-router-dom';
import { AppContext } from '../App';

const productJson = require('../../../products.json');
const productTypes = [];

Object.keys(productJson).forEach(item1 => {
    const products = productJson[item1];
    products.forEach(item2 => {
        productTypes.push(item2);
    })
})

const MenuContainer = () => {
    const [searchText, setSearchText] = useState("");
    const [activeMenu, setActiveMenu] = useState(null);
    const companyLogoUrl = require(`../../../assets/images/hon_logo_1.png`);
    const useAppContext = useContext(AppContext);
    const history = useHistory();

    useEffect(() => {
        const matchParams = matchPath(history.location.pathname, {
            path: `/product/:type?/:typeId?/:productId?`,
            exact: false,
            strict: false
        });
        if(!matchParams) return;

        setActiveMenu(matchParams.params.typeId);
    }, [history.location]);

    return <><div className="menu-container">
        <Row className="user-details m-0">
            <Col  className="company-logo">
                <img src={companyLogoUrl} alt="HON"/>
            </Col>
            <Col className="search-container">
                <div className="search-input">
                    <i className="fa fa-search" aria-hidden="true" />
                    <input
                        type="text"
                        placeholder="What can we help you find?"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />
                    {searchText.length !== 0 && <i className="fa fa-times-circle" aria-hidden="true"
                         onClick={() => setSearchText("")} />}
                </div>
            </Col>
            <Col className="user-info d-flex">
                <i className="fa fa-heart-o" aria-hidden="true"
                 onClick={() => history.push(`/product/wishlist`)} />
                <i className="fa fa-user" aria-hidden="true" 
                onClick={() =>  history.push("/user/sign-in")} />
                <i className="fa fa-shopping-cart" aria-hidden="true"
                 onClick={() => history.push(`/product/cart`)} >
                    {Object.keys(useAppContext.addedCartList).length > 0 &&<Badge bg="success" className="cart-badge">
                        {Object.keys(useAppContext.addedCartList).length}</Badge>}
                </i>
            </Col>
        </Row>
        <Row className="menu-list m-0">
            <div className="menu-items d-flex">
                {productTypes.map(item => <div key={item.id} 
                className={`menu-item ${activeMenu === item.id && "active"}`} 
                onClick={() => {
                    history.push(`/product/${item.name}/${item.id}`)
                    setActiveMenu(item.id)
                    }}>
                {item.displayName}</div>)}
            </div>
        </Row>
    </div>
    <div className="menu-container-mobile">
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="p-0 m-0">
            <div className="d-flex">
                <div className="menu-bar"><Navbar.Toggle><i className="fa fa-bars" aria-hidden="true"></i></Navbar.Toggle></div>
                <div className="company-logo"><img src={companyLogoUrl} alt="HON"/></div>
                <div className="menu-icon">
                    <i className="fa fa-heart-o" aria-hidden="true"
                        onClick={() => history.push(`/product/wishlist`)} />

                    <i className="fa fa-shopping-cart" aria-hidden="true"
                    onClick={() => history.push(`/product/cart`)} >
                        {Object.keys(useAppContext.addedCartList).length > 0 &&<Badge bg="success" className="cart-badge">
                            {Object.keys(useAppContext.addedCartList).length}</Badge>}
                    </i>
                </div>
            </div>
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto">
                {productTypes.map(item => <Nav.Link key={item.id}
                 onClick={() => {
                     history.push(`/product/${item.name}/${item.id}`)
                     setActiveMenu(item.id)
                     }}>
                     {item.displayName}
                    </Nav.Link> )}
                 <Nav.Link onClick={() => history.push("/user/sign-in")}>USER</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    </>
}

export default MenuContainer;