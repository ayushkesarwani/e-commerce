import './App.css';
import Header from './Header'
import Home from './Home';
import Store from './Store'
import Cart from './Cart'
import {BrowserRouter,Redirect,Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Store>
        <BrowserRouter>
          {/* <Switch> */}           
            <Route exact path="/" component={Header}/>
            <Route exact path="/" component={Home}/>    
            <Route path="/cart" component={Cart}/>
                
          {/* </Switch>   */}
        </BrowserRouter>
      </Store>
      
    </div>
    
  );  
}
export default App;
