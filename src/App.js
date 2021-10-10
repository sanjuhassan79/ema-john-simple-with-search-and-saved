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
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
function App() {
  return (
    <div>
     
<AuthProvider>

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
          <PrivateRoute path="/Inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/Shipping">
            <Shipping></Shipping>
          </PrivateRoute>
          <PrivateRoute path="/PlaceOrder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>

</AuthProvider>


     
    </div>
  );
}

export default App;
