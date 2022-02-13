import React from 'react';
import '../../App.css';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';

/*
const App = () => {
  return (
    <CoinbaseCommerceButton checkoutId={'My checkout ID'}/>
  )
};
*/
export default function Services() {
  return (
    
    <div>
      <a class="buy-with-crypto"
        href="https://commerce.coinbase.com/checkout/b0e076be-1a93-4da4-91ea-ad6f5d2bc486">
          Buy with Crypto
      </a>
      <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
      </script>
    </div>
  );

  
}
