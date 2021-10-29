import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import { Provider } from "react-redux";
// import store from "./store/index";

import Footer from "./components/Footer";

import Member from "./pages/member";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/member" component={Member} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
