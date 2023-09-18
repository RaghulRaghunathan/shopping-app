import React, { useContext, useMemo } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useHistory, matchPath } from "react-router-dom";
import { AppContext } from "../../../App";
import { NoRecordFound } from "../../NoRecordFound";
import ReactSelect from "react-select";

const Gallery = () => {
  const history = useHistory();

  const matchParams = matchPath(history.location.pathname, {
    path: `/:product?/:type?/:typeId?/:productId?`,
    exact: false,
    strict: false,
  });

  const useAppContext = useContext(AppContext);

  const getproducts = (typeId, productId, type) => {
    return useAppContext.getProductList(typeId, productId, type);
  };

  const handledAddToCart = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    useAppContext.setCartList(id, 1);
  };

  const productList = useMemo(
    () =>
      getproducts(matchParams.params.typeId, matchParams.params.productId, matchParams.params.type),
    [
      matchParams.params.product,
      matchParams.params.typeId,
      matchParams.params.productId,
      matchParams.params.type,
      useAppContext.addedWishlist,
      useAppContext.addedCartList,
    ]
  );

  return productList.length === 0 ? (
    <NoRecordFound />
  ) : (
    <div className="body">
      <Row xs={1} sm={1} md={2} lg={3} xl={3} xxl={4} className="gallery">
        {productList.map((item) => (
          <Col key={item.id} className="gallery-item">
            <Card
              style={{ maxWidth: "270px", minWidth: "230px", height: "100%", cursor: "pointer" }}
              onClick={() =>
                history.push(
                  `/product/${item.typeName}/${item.typeId}/${item.productId}/${item.id}`
                )
              }
            >
              {matchParams.params.type !== "cart" && (
                <div className="wishlist-btn">
                  <i
                    className={`fa ${
                      useAppContext.addedWishlist.indexOf(item.id) >= 0 ? "fa-heart" : "fa-heart-o"
                    }`}
                    title="Add to wishlist"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      useAppContext.setWishList(item.id);
                    }}
                  ></i>
                </div>
              )}
              <Card.Img
                variant="top"
                height="200px"
                src={require(`../../../../../assets/images/${item.id}-1.jpeg`)}
              />
              <Card.Body>
                <div className="title">{item.productName}</div>
                <div className="review d-flex">
                  <div className="rating">
                    {item.rating}
                    <i className="fa fa-star"></i>
                  </div>
                  <span>{`(${item.ratingCount})`}</span>
                </div>
                <div className="price">
                  <span className="price-value">{`$${
                    item.price - Math.round((item.price * item.offer) / 100)
                  }.00`}</span>
                  <span className="mrp-price">{`$${item.price}.00`}</span>
                  <span className="offer">{`${item.offer}% off`}</span>
                </div>
                {matchParams.params.type === "wishlist" && (
                  <div className="add-to-cart-btn">
                    <Button
                      size="sm"
                      variant="success"
                      onClick={(e) => handledAddToCart(item.id, e)}
                      disabled={Object.keys(useAppContext.addedCartList).indexOf(item.id) >= 0}
                    >
                      {Object.keys(useAppContext.addedCartList).indexOf(item.id) >= 0
                        ? "Item in Cart"
                        : "Add To Cart"}
                    </Button>
                  </div>
                )}
                {matchParams.params.type === "cart" && (
                  <>
                    <Row className="quantity-selection">
                      <ReactSelect
                        options={[
                          { value: "1", label: "1" },
                          { value: "2", label: "2" },
                          { value: "3", label: "3" },
                          { value: "4", label: "4" },
                          { value: "5", label: "5" },
                        ]}
                        onChange={(e) => useAppContext.setCartList(item.id, e.value)}
                        defaultValue={{
                          value: useAppContext.addedCartList[item.id].quantity,
                          label: useAppContext.addedCartList[item.id].quantity,
                        }}
                        value={{
                          value: useAppContext.addedCartList[item.id].quantity,
                          label: useAppContext.addedCartList[item.id].quantity,
                        }}
                        className="select-btn"
                      ></ReactSelect>
                    </Row>
                    <Row className="remove-to-cart-btn">
                      <Button
                        variant="outline-success"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          useAppContext.setCartList(item.id, 0);
                        }}
                      >
                        REMOVE FROM CART
                      </Button>
                    </Row>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
