import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import { ProdContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import './ProductDetails.css'


const ProductDetails = () => {

  //localhost:3000/product/{id}
  const {id} = useParams();

  //getProductById is a function jo single product return karta ha id ke hisab se jo isme hum paas karte ha
  const {getProductById,product,addProdToCart,cartData} = useContext(ProdContext);

  const {title, image, price, category,description } = product;

  const showButton = (id) => {
    if(cartData.find(item=>item.id === parseInt(id))){
      return <Link className="goto-btn" to="/cart">Go to Cart</Link>
    }else{
      return <div onClick={()=>addProdToCart(id)}>Add to Cart</div>
    }
  }

  useEffect(() => {
    getProductById(id);
  })

  return (
    <div className="ui grid container">
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" alt={title} src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <p className="ui teal tag label">${price}</p>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  {showButton(id)}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProductDetails;
