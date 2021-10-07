import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/home";
import Profile from "./pages/profile";
import Users from "./pages/users";
import Footer from "./components/Footer";
import Posts from "./pages/posts";
import Members from "./pages/members";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/members" component={Members} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
