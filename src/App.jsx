import "./App.css";
import { Route, Switch } from "wouter";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" component={Landing} />

        <Route path="/users/:name">
          {(params) => <>Hello, {params.name}!</>}
        </Route>

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
