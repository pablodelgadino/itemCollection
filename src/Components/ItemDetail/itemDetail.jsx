import React, {useState} from 'react';
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addItem} = useCartContext ();

    const onAdd = (quantity) => {
       setGoToCart(true);
       addItem(data, quantity);
    }

return (
    <div className='detail_cakes card col-3 mx-auto'>
        <img className='card-img-top' src={data.img} alt="" />
        <h1>{data.title}</h1>
        <h3>{data.description}</h3>
        <h2>${data.price}</h2>
        {goToCart ? <Link to='/cart'>Finalizar Compra</Link> : <ItemCount initial ={1} stock={data.stock} onAdd={onAdd}/>}
    </div>
);
}

export default ItemDetail;