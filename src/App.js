
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./components/Home";
import AllPosts from "./containers/AllPosts";
import PostForm from "./components/PostForm";
import NavBar from "./components/Navbar";
import SinglePost from "./components/SinglePost";
import PostSubmitButton from "./components/PostSubmitButton";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <>
          <div>
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
          </div>
          </>
          {/* END OF NAVBAR LINKS ------------------------------------------- */}
          <Route 
            exact
            path="/posts/postId"
            render={(routerprops) => <SinglePost {...routerprops} />}
            />
            <Route 
            exact
            path="/posts/new"  // Not positive this is correct and need to come back
            render={(routerprops) => <PostSubmitButton {...routerprops} />}
            />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
