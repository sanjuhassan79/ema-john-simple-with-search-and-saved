import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
function App() {
  return (
    <div>
     

      <Router>
      <div>
      <Header></Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="/Shop">
          <Shop></Shop>
          </Route>
          <Route path="/OrderReview">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/Inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/PlaceOrder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>



     
    </div>
  );
}

export default App;
