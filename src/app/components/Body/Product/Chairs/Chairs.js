import React, {useState,useMemo, useContext, useEffect } from "react";
import { Row } from "react-bootstrap";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import ProductSpecs from "./ProductSpecs";
import { useHistory, matchPath } from "react-router-dom";
import { AppContext } from "../../../App";

const Chairs = () => {
    const [activeProduct, setActiveProduct] = useState(null);

    const history = useHistory();

    const matchParams = matchPath(history.location.pathname, {
        path: `/product/:type?/:typeId?/:productId?/:colorId?`,
        exact: false,
        strict: false
    });

    const useAppContext = useContext(AppContext);

    const getproducts = (typeId,productId) => {
        return useAppContext.getProductList(typeId,productId)
    };

    const productList = useMemo(() => getproducts(matchParams.params.typeId,matchParams.params.productId), 
    [matchParams.params.typeId,matchParams.params.productId]);

    useEffect(() => {
        setActiveProduct(matchParams.params.colorId 
            ? productList.find(item => item.id === matchParams.params.colorId) : productList[0])
    }, [productList,matchParams.params.colorId]);


    return <div className="body">
        <Row className="m-0">
            <ProductImage activeProductInfo={activeProduct} productList={productList}/>
            <ProductDetails setActiveProduct={setActiveProduct} activeProductInfo={activeProduct} productList={productList}/>
        </Row>
        <Row className="m-0">
            <ProductSpecs/>
        </Row>
    </div>
}

export default Chairs;