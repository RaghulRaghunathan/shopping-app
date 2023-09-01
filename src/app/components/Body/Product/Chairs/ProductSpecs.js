import React, {useState} from "react";
import Review from "./Review";

const ProductSpecs = () => {
    const [type, setType] = useState(3);

    return <div className="product-specs">
        <div className="title d-flex">
            <div className={`item ${type === 1 && "active"}`} onClick={() => setType(1)}>Details</div>
            <div className={`item ${type === 2 && "active"}`} onClick={() => setType(2)}>Dimensions</div>
            <div className={`item ${type === 3 && "active"}`} onClick={() => setType(3)}>Reviews</div>
        </div>
        {(type === 1 || type === 2) && <div className="coming-soon">Coming Soon.....</div>}
        {type === 3 && <Review/>}
    </div>
}

export default ProductSpecs;