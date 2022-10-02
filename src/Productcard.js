import React, { useState, useEffect } from "react";
import "./Productcard.css";
import Axios from "axios";
import { MdOutlineStar } from "react-icons/md";

const productslist = [
  {
    id: 1,
    newPrice: "47999",
    oldPrice: "65999",
    productImage:
      "https://m.media-amazon.com/images/I/417PwBC+iEL._SX342_SY445_.jpg",
    productName: "Apple iPhone 12 (64GB) - (Product) RED",
  },
  {
    id: 2,
    newPrice: "109900",
    oldPrice: "129900",
    productImage: "https://m.media-amazon.com/images/I/617FFRO3vcL._SX679_.jpg",
    productName: "Apple iPhone 13 Pro (256GB) - Silver",
  },
  {
    id: 3,
    newPrice: "2990",
    oldPrice: "3190",
    productImage: "https://m.media-amazon.com/images/I/71L5lSfJIPS._SX679_.jpg",
    productName: "New Apple AirTag",
  },
  {
    id: 4,
    newPrice: "10900",
    oldPrice: "10900",
    productImage: "https://m.media-amazon.com/images/I/41tbRWAJfES._SX679_.jpg",
    productName:
      "Apple MagSafe Battery Pack (for iPhone 12, iPhone 12 Pro, iPhone 12 Pro Max and iPhone 12 Mini)",
  },
  {
    id: 5,
    newPrice: "16900",
    oldPrice: "26900",
    productImage: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg",
    productName: "Apple AirPods Pro (2nd Generation) ​​​​​​​",
  },
  {
    id: "6",
    newPrice: "1649",
    oldPrice: "1900",
    productImage: "https://m.media-amazon.com/images/I/41YDDVjblsL._SX679_.jpg",
    productName: "Apple EarPods with 3.5mm Headphone Plug​​​​​​​​​​​​​​",
  },
  {
    id: "7",
    newPrice: "8990",
    oldPrice: "10900",
    productImage: "https://m.media-amazon.com/images/I/21bn7AjfSnS._SX679_.jpg",
    productName: "Apple Pencil (2nd Generation)​​​​​​​​​​​​​​",
  },
  {
    id: "8",
    newPrice: "749",
    oldPrice: "900",
    productImage: "https://m.media-amazon.com/images/I/413zwUVL+1L._SX679_.jpg",
    productName:
      "Apple Lightning to 3.5 mm Headphone Jack Adapter​​​​​​​​​​​​​​",
  },
];

function Productcard(props) {
  // const [resData, setResData] = useState('');

  const { handleClick } = props;

  // fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
  //   .then(response => response.json())
  //   .then(data => {

  //     JSON.stringify(data);
  //     console.log(data);
  //     //  setResData(data);
  //   });

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  var productslists = [];

  Object.keys(products).forEach((k) => {
    Object.keys(products[k]).forEach((v) => {
      (productslists[k] = productslists[k] || { id: k })[v] = products[k][v];
    });
  });
  console.log(productslists);
  console.log(productslist);

  return (
    <div>
      <div className="Card">
        {productslist.map((item) => (
          <div key={item.id} className="items">
            <img src={item.productImage} alt={item.productName} />
            <div className="item-body">
              <p className="productName">{item.productName}</p>
              <div className="price">
                <p className="stars"><span><MdOutlineStar/></span>
                <span><MdOutlineStar/></span>
                <span><MdOutlineStar/></span>
                <span><MdOutlineStar/></span>
                <span><MdOutlineStar/></span></p>
                <p className="oldPrice">{item.oldPrice}</p><span>/-</span>
                <p className="newPrice">{item.newPrice}<span>/-</span></p>
              </div>
            </div>
            <div className="addToCart" onClick={handleClick}>
              ADD TO CART
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productcard;
