import jeans from './jeans.png'; 
import tshirt from './tshirt.png'; 
import jacket from './jacket.png'; 
import Product from './Product';
import { useState } from 'react';

const Shopping = () => {
  const [items] = useState([
    { name: 'T-Shirt', price: 25, image: tshirt },
    { name: 'Jeans', price: 50, image: jeans },
    { name: 'Jacket', price: 75, image: jacket },
  ]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`Item: ${item.name} has been added to cart.`);
  }
  return (
    <div className="browse-shop">
      <h1>Browse Shop</h1>
      <br />
      <br />

      <div className="row product-bg col-12 col-md-2 mb-3">
        <h2>Cart</h2>
        <br />
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name} £{item.price} </li>
          ))}  
        </ul>
      </div>

      <div className="products row">
        {items.map((item) => (
          <Product key={item.id} name={item.name} price={item.price} image={item.image} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}


export default Shopping;
