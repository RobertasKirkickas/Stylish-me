import { Routes, Route } from "react-router-dom";
import Header from './Header'
import LandingPage from './LandingPage';
import Product from './Product';
import './App.css';
import jeans from './jeans.png'; 
import tshirt from './tshirt.png'; 
import jacket from './jacket.png'; 
import Shopping from './Shopping';
import Profile from './Profile'
import Legal from './Legal'
import NavMenu from './NavMenu';
import InterestCalculator from './Calc'
import { useState } from 'react';



const App = () => {

  return (
    <div className="App">
<Routes>
<Route exact path="/" element={<Landing />} />
<Route path="/shopping" element={<ShoppingNav />} />
<Route path="/profile" element={<UserProfile />} />
<Route path="/legal" element={<LegalPage />} />
<Route path="/interest-calculator" element={<IntCalc />} />
</Routes>



    </div>
  );
};

export default App;






const Landing = () => {
  const [products] = useState([
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
    <div className="App">
      <Header isLoggedIn={IsLogged()} />

      <NavMenu />
      <br />
      <div className="">
        <LandingPage />
      </div>

      <br />

      <div className="products row">
        {products.map((item) => (
          <Product key={item.id} name={item.name} price={item.price} image={item.image} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

  
  
  function UserProfile() {
    return (
  <div className="App">
 <Header isLoggedIn={IsLogged()} />
 <NavMenu />
    <Profile />
  </div>
    );
    }


    function ShoppingNav() {
      return (
    <div className="App">
   <Header isLoggedIn={IsLogged()} />
 <NavMenu />
          <Shopping />
        </div>
      );
      }

      function LegalPage() {
        return (
      <div className="App">
     <Header isLoggedIn={IsLogged()} />
 <NavMenu />
        <Legal />
      </div>
        );
        }

        function IntCalc() {
          return (
        <div className="App">
       <Header isLoggedIn={IsLogged()} />
       <NavMenu />
          <InterestCalculator />
        </div>
          );
          }
      
          // Main Logged In / Not. Change here to check.
          function IsLogged() {
            const isLoggedIn = false; // false = not logged in, true = logged in
            return isLoggedIn;
          }
          