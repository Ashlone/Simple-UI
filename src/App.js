import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";

//Styles
import { GlobalStyle } from "./GlobalStyles";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Shop from "./pages/Shop/Shop";

function App() {
  const isSignedIn = true;
  return (
    <div>
      <GlobalStyle />

      <Router>
        <Menu />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
