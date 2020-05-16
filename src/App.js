import React from 'react';
import { Switch, Route,Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component.jsx';

const HatsPage = () => (
  <div>  
    <h1>HatsPage</h1>
  </div>
);


  

const Topic =(props)  => {
console.log(props);
  return(
    <div>
    <Link to = '/'>HomePage</Link>
    <button onClick={()=>(props.history.push('/'))}>HomePage</button>
    <h1>Content :({props.match.params.contId})</h1>
   </div>
   );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={ShopPage} />
        <Route path='/hats' component={HatsPage} />
        <Route  path ='/hats/:contId' component={Topic} />
      </Switch>
    </div>
  );
}

export default App;
