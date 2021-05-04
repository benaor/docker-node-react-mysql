import "./App.css";
import HomePage from "./pages/HomePage";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
