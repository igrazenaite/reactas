import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import P1 from './ProductCard/ProductCard';
import PList from './ProductList/ProductList'
import plant from './Habenaria_radiata.jpg';
//import App from './App.js'
//import Administration from './ProductAdministrationComponent/ProductAdministrationComponent';

var InitialApp = (props) =>{
  return <div>{props.children}</div>;
}
var NoMatch = (props) =>{
  return <div>Route did not match</div>;
}
var DemonstruotiNavigacija =(props)=>{
  var goApp = () => props.router.push("/");
  return (
    <div>
        At route: {props.router.getCurrentLocation().pathname}
        <button onClick={goApp}>Go to App</button>
        <pre>
            {JSON.stringify(props, null, 2)}
        </pre>
      </div>
  );
};

var products= [{
  title: 'Some plant', 
  imageURL: plant, 
  description: 'Wonderful plant', 
  price: '100', 
  quantity: '5'
  },
 {
  title: 'Some other plant',
  imageURL: plant,
  description: 'This one is priceless',
  price: '99',
  quantity: '1'
},
 {
  title: 'One more plant',
  imageURL: plant,
  description: 'You will not be able to buy it',
  price: '5',
  quantity: '2'
},
 {
  title: 'Actually it is a Habenaria radiata',
  imageURL: plant,
  description: 'A terrestrial orchid from Japan',
  price: '15',
  quantity: '4'
}]

var lowPriceProducts = products.filter(prod => prod.price < 10);
console.log("Products with prices less than 10: ", lowPriceProducts);

var totalPrice = products
	.reduce((sum, prod) => sum + (parseInt(prod.price) * parseInt(prod.quantity)));
console.log("Total price: ", totalPrice);

ReactDOM.render(
  //<App />,
  <PList products={products}/>,
  document.getElementById('root')

);

/* 
{/* <Router history={hashHistory}>
    <Route path="/" component={PList}>
    <IndexRoute component={PList}/>
    <Route path="/products" component={PList}/>
    <Route path="/admin/products/:id" component={Administration}/>
    <Route path="/admin/products/new" component={Administration}/>
    <Route path="*" component={NoMatch}/>
    </Route>
  </Router>), */