import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CartProvider } from './context/cartContext';
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Home, ItemDetailScreen, CartScreen, ProductsScreen, AboutScreen, ContactScreen, CheckoutScreen, ConfirmedOrderScreen } from "./pages";
import { NavBar } from './components'
import { theme } from "./styles";
import "./App.css";
import "./index.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider theme={theme({ paletteType: "dark" })}>
        <CssBaseline />
        <Router>
          <CartProvider>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={ProductsScreen} />
              <Route exact path="/products/:id" component={ItemDetailScreen} />
              <Route exact path="/about" component={AboutScreen} />
              <Route exact path="/contact" component={ContactScreen} />
              <Route exact path="/cart" component={CartScreen} />
              <Route exact path="/checkout" component={CheckoutScreen} />
              <Route exact path="/confirmed-order" component={ConfirmedOrderScreen} />
            </Switch>
          </CartProvider>
        </Router>
      </MuiThemeProvider>
    );
  }
}
