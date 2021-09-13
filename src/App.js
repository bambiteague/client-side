import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./components/Home";
import Posts from "./containers/Posts";
import PostForm from "./components/PostForm";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route
              exact
              path="/home"
              render={(routerprops) => <Home {...routerprops} />}
            />
            <Route
              exact
              path="/posts/new"
              render={(routerprops) => <PostForm {...routerprops} />}
            />
            <Route
              exact
              path="/posts"
              render={(routerprops) => <Posts {...routerprops} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
