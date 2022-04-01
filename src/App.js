import "./App.css";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { resetCurrentUser } from "./redux/user/user.actions";
import HomePage from "./pages/homepage/homepage.component";
import MatchupPage from "./pages/matchup/matchup-page";
import NavBar from "./components/navbar/navbar.component";
import SearchPage from "./pages/searchpage/searchpage.component";
import PokedexPage from "./pages/pokedex/pokedex-page.component";
import SignUpSignIn from "./pages/sign-up-sign-in/sign-up-sign-in.component";
import CartIcon from "./components/cart-icon/cart-icon.component";
import Team from "./pages/team/team.component";

import { Container } from "@mui/material";

function App({ currentUser, resetCurrentUser }) {
  return (
    <Container maxWidth="xxl" disableGutters>
      <NavBar
        brandText={"POKEMON STRATEGY"}
        brandUrl="/"
        items={[
          {
            url: "/search",
            content: "POKEDEX",
          },
          {
            url: "/team",
            content: "BUILD TEAM",
          },
          {
            url: "/1v1",
            content: "1v1",
          },
          {
            url: "/teamFight",
            content: "TEAM VS TEAM",
          },
          currentUser === null
            ? {
                url: "login",
                content: "SIGN-IN",
                handleClick: () => null,
              }
            : {
                url: "/",
                content: "SIGN-OUT",
                handleClick: () => {
                  resetCurrentUser();
                  auth.signOut();
                },
              },
        ]}
        additionalComponent={[<CartIcon />]}
      />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/1v1" component={MatchupPage} exact />
        <Route path="/search" component={SearchPage} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/pokemon/:pokemonName" component={PokedexPage} exact />
        <Route path="/login" component={SignUpSignIn} exact />
        <Route path="" component={() => <div>There is nothing here!</div>} />
      </Switch>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  resetCurrentUser: () => dispatch(resetCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
