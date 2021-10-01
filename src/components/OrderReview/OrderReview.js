import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';

const OrderReview = () => {

    const [products]=useProducts()
    const [cart,setCart]=useCart(products )

const handleRemove=key=>{
const newCart=cart.filter(product=>product.key !==key)
setCart(newCart)

removeFromDb(key)
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;