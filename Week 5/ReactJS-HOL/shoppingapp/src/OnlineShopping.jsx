import React from 'react';
import Cart from './Cart';

export default class OnlineShopping extends React.Component {
  carts = [new Cart('Laptop', 65000), new Cart('Headphones', 2500), new Cart('Mobile Phone', 30000), new Cart('Keyboard', 1800), new Cart('Mouse', 750)];
  render() { return <main><h1>Online Shopping Cart</h1><table><thead><tr><th>Item Name</th><th>Price (₹)</th></tr></thead><tbody>
    {this.carts.map((cart) => <tr key={cart.Itemname}><td>{cart.Itemname}</td><td>{cart.Price.toLocaleString('en-IN')}</td></tr>)}
  </tbody></table></main>; }
}
