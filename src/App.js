import { BrowserRouter, Switch, Route } from "react-router-dom";

// page components
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Registration from "./pages/registration/Registration";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";

// general components
import Navbar from "./components/Navbar";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* dynamic path with route parameter, need to extract it later*/}
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
