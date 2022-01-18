
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/Products">
        <Products/>
      </Route>
    </Switch>
    </BrowserRouter>
     
  );
}
export default App;
