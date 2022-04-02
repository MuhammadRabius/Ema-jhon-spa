import React from 'react';
import useProducts from './../../hook/useProducts';
import useCart from './../../hook/useCart';

const Orders = () => {
      const [products,setProducts] =useProducts();
      const [cart,setCart]= useCart(products);
      return (
            <div>
                  <h1>This is Order Product:{products.length}</h1>
                  <h2>This cart has:::::{cart.length}</h2>
            </div>
      );
};

export default Orders;