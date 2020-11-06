import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import MenuBar from "./MenuBar";
import Home from "./Home";
import Checkout from "./Checkout";
import Signin from "./Signin";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HX72EEAWfO2Idpg9OrgRmhrllRJdZod3QSNw3M3CsTazsyv8f3UAbVPp3PU88INLYwZXa3SVgSn2HLVNi0ygI8400zlRl9pOT"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Only run once when load
    auth.onAuthStateChanged((authUser) => {
      console.log("User:", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <MenuBar />
            <Orders />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/checkout">
            <Header />
            <MenuBar />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <MenuBar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <MenuBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
