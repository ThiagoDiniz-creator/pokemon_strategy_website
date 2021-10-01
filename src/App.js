import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import NavBar from "./components/navbar/navbar.component";
import SearchPage from "./pages/searchpage/searchpage.component";
import PokedexPage from "./pages/pokedex/pokedex-page.component";
import SignUpSignIn from "./pages/sign-up-sign-in/sign-up-sign-in.component";

function App() {
  return (
    <div className="App">
      <NavBar brandText={"POKEMON STRATEGY"}
      brandUrl="/"
        items={[
          {
            url: "/search",
            content: "FIND POKEMON",
          },
          {
            url: "/",
            content: "BUILD MATCH UP",
          },
          {
            url: "/",
            content: "BUILD TEAM",
          },
          {
            url: "/login",
            content: "SIGN-UP"
          }
        ]}
      />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={SearchPage} exact />
        <Route path="/pokemon/:pokemonName" component={PokedexPage} exact />
        <Route path="/login" component={SignUpSignIn} exact />
      </Switch>
    </div>
  );
}

export default App;
