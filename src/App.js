import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Users from "./components/Users/Users";
import "./App.css"

function App() {
  return (
    <div>
        <Router>
            <Header/>
            <Switch>
                <Route path={"/users"}>
                    <Users/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}


export default App;
