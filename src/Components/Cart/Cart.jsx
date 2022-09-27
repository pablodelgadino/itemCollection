import React from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/itemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    
    if (cart.length === 0) {
        return (
            <>
             <h1> No se agregaron productos al carrito</h1>
             <Link to= '/'>Volver al Home</Link>
            </>
        );
    }
    
    return (
        <>
            {
              cart.map(product => <ItemCart key={product.id} product={product} />)  
            }
            <h2 className='txtTotal'> Total: ${totalPrice()}</h2>
        </>     
    )
}

export default Cart