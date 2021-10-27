import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import store from "./store/index";

import Home from "./pages/home";
import Footer from "./components/Footer";
import Todo from "./pages/todo";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={Todo} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
