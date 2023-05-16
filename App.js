import './App.css';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import {CartProvider} from 'react-use-cart';
function App() {
  return (
    <div className="App">
      <CartProvider>
          <Hero/>
          
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
          <Cart/>
          </CartProvider>
          
          
    </div>
  );
}

export default App;