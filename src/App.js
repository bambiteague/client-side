import "./App.css";

import { BrowserRouter as Router, Route} from "react-router-dom"
import { Switch } from "react-router"
import Home from "./components/Home"



function App() {
  return <div>
          <Router>
            <div>
              <Switch>
              <Route path="/home" render={(routerprops) => <Home {...routerprops}/>}/>
              <Route path="/posts" />
              <Route path="/posts/new" />
              </Switch>
            </div>
          </Router>
        </div>;
}

export default App;
