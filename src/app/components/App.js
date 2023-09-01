import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";

const shuffleArray = (list) => {
  var currentIndex = list.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [list[currentIndex], list[randomIndex]] = [
      list[randomIndex], list[currentIndex]];
  }

  return list;
}

const productJson = require('../../products.json');
const productList = [];

Object.keys(productJson).forEach(item1 => {
    const products = productJson[item1];
    products.forEach(item2 => {
        item2.list.forEach(item3 => {
            item3.type.forEach(item4 => {
                productList.push({
                    typeId: item2.id,
                    typeName: item2.name,
                    productId: item3.id,
                    productName: item3.name,
                    rating: item3.rating,
                    ratingCount: item3.ratingCount,
                    ...item4
                })
            })
        })
    });
});

export const AppContext = React.createContext();

const App = () => {
  const [reviews, setReview] = useState([]);
  const [addedToCart, setAddToCarts] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [addedWishlist, setAddToWishlistList] = useState([]);
  const [addedCartList, setAddToCartList] = useState({});

  const handleAddReview = (data) => {
    const reviewId = uuid();
    const params={
      reviewId,
      ratingCount: data.ratingCount ? data.ratingCount : 0,
      reviewTitle: data.reviewTitle ? data.reviewTitle : "",
      reviewMessage: data.reviewMessage ? data.reviewMessage : "",
      author: data.author ? data.author : "",
      date: moment.utc()
    };

    setReview([...reviews,params])
  }

  const setAddToCart = (value, quantity) => {
    setAddToCarts(value);
    setCartCount(cartCount+ parseInt(quantity))
  }

  const setWishList = (id) => {
    if(addedWishlist.indexOf(id) >= 0){
      const list = [...addedWishlist];
      list.splice(list.indexOf(id), 1);
      setAddToWishlistList(list);
    }else setAddToWishlistList([...addedWishlist,id]);
  }

  const setCartList = (id, quantity) => {
    const listById = {...addedCartList};
    if(quantity){
        listById[id] = {
          id: id,
          quantity: quantity
        }
    }else delete listById[id];

    setAddToCartList(listById)
  }

  const getProductList = (productTypeId = null,productId = null, type=null) => {
    let filteredList = [];
    if(type === "wishlist"){
      filteredList = productList.filter(item => addedWishlist.indexOf(item.id) >= 0);
      return filteredList;
    }

    if(type === "cart"){
      filteredList = productList.filter(item => Object.keys(addedCartList).indexOf(item.id) >= 0);
      return filteredList;
    }

    if(productId || productTypeId) {
      filteredList = productList.filter(item => {
        if(productId) return productId === item.productId;
        else return productTypeId === item.typeId;
      })
    }else filteredList= shuffleArray(productList);

    return filteredList;
  }

  const value = {
    reviews,
    addedWishlist,
    addedCartList,
    addedToCart,
    cartCount,
    handleAddReview,
    setAddToCart,
    setWishList,
    setCartList,
    getProductList
  }

  return <AppContext.Provider value={value}>
          <Router>
            <Switch>
              <Route path="/">
                <div className="app-container">
                  <Header/>
                  <Body/>
                  <Footer/>
                  <ToastContainer
                    position="top-right"
                    hideProgressBar={false}
                    autoClose={2000}
                    newestOnTop={true}
                    closeOnClick={false}
                    draggable={false}
                    rtl={false}
                  />
                </div>
              </Route>
            </Switch>
        </Router>
    </AppContext.Provider>
}

export default App;
