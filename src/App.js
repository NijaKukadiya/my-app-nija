import './App.css';
import RootContainer from './container/RootContainer';
import Photos from './container/Photos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* header */}
      <div> <h1>Post Listing </h1>
      <Router>
        
      <div> <h1><Link to="/Photos">Photos</Link></h1></div>
      <Switch>
        <Route exact path="/">
        <RootContainer />
        </Route>
        <Route exact path="/Photos">
        <Photos />
        </Route>
      </Switch>
      </Router>
      </div>
      <hr />
      {/* body */}
      
     </div>
  );
}
export default App;
