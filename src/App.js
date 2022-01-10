import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./modules/components/common/Header/Header.js";
import Categories from "./modules/components/category/Categories.js";
import CartPage from "./modules/components/cart/CartPage.js";
import ProductPage from "./modules/components/product/ProductPage.js";
import ErrorScreen from "./modules/components/common/ErrorScreen/ErrorScreen.js";
import { CartProvider } from "./modules/hooks/CartContext.js";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Categories} />
            <Route path="/cart" component={CartPage} />
            <Route exact path="/journal" component={ErrorScreen} />
            <Route exact path="/more" component={ErrorScreen} />
            <Route exact path="/:id" component={ProductPage} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
