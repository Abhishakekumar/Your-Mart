import React,{useState,useEffect} from 'react'

const ProdContext = React.createContext();
const ProductProvider = (props) => {
    const[productDetails, setProductDetails] = useState([]) /// complete shop product used for api
    const[product,setProduct] = useState([]);  /// this is for only single product i.e for productDetail page
    const [cartData, setCartData] = useState([]); /// in this all the cart items will be pushed.

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then(res=>res.json())
        .then(a=>{
            setProductDetails(a);
        })
    },[]);

    const getProductById = (id) =>{
        productDetails.map((item)=>{
            if(item.id === parseInt(id)){
                setProduct(item);
            }
            return item;
        })
    }  

    const addProdToCart = (id) =>{
        productDetails.map((item)=>{
            if(item.id === parseInt(id)){
                item.qty = 1;
                setCartData([...cartData,item]);
                
            }
            return item;

        })
    }

    const deleteItemHandler = (id) => {
        var temp = cartData.filter((item)=>{
            return item.id !== id
        });
        setCartData([...temp])
        
    }


    const incrementItem = (id) =>{
        let temp = cartData.map((item)=>{
            if(item.id === id){
                item.qty = item.qty + 1
            }
            return item
        })
        setCartData([...temp])
    }

    const decrementItem = (id) =>{
        let temp = cartData.map((item)=>{
            if(item.id === id && item.qty > 1){
                item.qty = item.qty - 1
            }
            return item
        })
        setCartData([...temp])
    }

    const removeAllItem = () =>{
        setCartData([]);
    }

    const onCheckoutHandler = () =>{
        setCartData([]);
    }

    return(
        <ProdContext.Provider value={{productDetails,getProductById,product, addProdToCart,cartData,incrementItem, decrementItem,deleteItemHandler, removeAllItem, onCheckoutHandler}}>
            {props.children}
        </ProdContext.Provider>
    )
}

export {ProductProvider,ProdContext}
