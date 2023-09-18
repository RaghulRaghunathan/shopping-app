import React from 'react';
import MenuContainer from "./MenuContainer";
import OfferBanner from "./OfferBanner";

const Header = () => {
    return <div className="header">
        <OfferBanner/>
        <MenuContainer/>
    </div>
}

export default Header;