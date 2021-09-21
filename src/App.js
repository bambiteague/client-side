
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./components/Home";
import AllPosts from "./containers/AllPosts";
import PostForm from "./components/PostForm";
import NavBar from "./components/Navbar";
import SinglePost from "./components/SinglePost";
import { UserRegistration } from "./containers/UserRegistration";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
        <Route
              exact
              path="/users"
              render={(routerprops) => <UserRegistration {...routerprops} />}
            />
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
              render={(routerprops) => <AllPosts {...routerprops} />}
            />
          <Route 
            exact
            path="/posts/:postId"
            render={(routerprops) => <SinglePost {...routerprops} />}
            />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
