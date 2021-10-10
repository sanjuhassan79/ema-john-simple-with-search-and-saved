import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';

const OrderReview = () => {

    const [products]=useProducts()
    const [cart,setCart]=useCart(products );
    const history=useHistory()

const handleRemove=key=>{
const newCart=cart.filter(product=>product.key !==key)
setCart(newCart)

removeFromDb(key)
}

const handlePlaceOrder=()=>{

    history.push('/Shipping')
  setCart([]);
     clearTheCart()
}



    return (
        <div>
           <div className="shop-container">
                <div className="product-container">
               { cart.map(product => <Reviewitem
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                        >
                        </Reviewitem>)
                    }
                        
                </div>
                <div className="cart-container">

                    <Cart cart={cart}>
                        <button
                        onClick={handlePlaceOrder}
                        className="btn-regular">Proceed to Shipping</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;