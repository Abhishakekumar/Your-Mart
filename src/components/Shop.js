import React, {useContext, useState } from 'react'
import { ProdContext } from '../context/ProductContext'
import Product from './Product'
import Select from 'react-select';

const Shop = () => {

    const {productDetails} = useContext(ProdContext);

    const [shopItems, setShopItems] = useState(productDetails);

    
    var categoryOptions = [
        {
            label:"Men's clothing",
            value:"men's clothing"
        },
        {
            label:"Jewelery",
            value:"jewelery"
        },
        {
            label:"Electronics",
            value:"electronics"
        },
        {
            label:"Women's clothing",
            value:"women's clothing"
        },
        {
            label:"All",
            value:"All"
        },

    ]
    const setCategory = (e) => {
        const updatedItem = productDetails.filter((item)=>{
            if(e.value !== "All"){
                return item.category === e.value;
            }
            return item
        });
        setShopItems([...updatedItem]);
    }

    return (
        <div>
            <div className="shop-header">
                <h2 style={{marginTop:"10px"}}>All Products</h2>
                <Select className="category" options={categoryOptions} onChange={setCategory}/>
            </div>

            <div className="shop-main">
                {
                shopItems.map((item)=>{
                        return (
                            <Product key={item.id} data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shop;