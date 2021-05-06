import './App.css';
import Header from './Header'
import Home from './Home';
import Store from './Store'
import Cart from './Cart'
import {BrowserRouter,Redirect,Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={Cart}/>
          <Store>
              <Route path="/" component={Header}/>
              <Route path="/" component={Home}/>
              
          </Store> 

        </Switch>
        
        
        
      </BrowserRouter>
      
    </div>
    
  );  
}
export default App;
