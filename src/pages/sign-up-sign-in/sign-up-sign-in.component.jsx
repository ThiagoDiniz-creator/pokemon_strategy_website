import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-up-sign-in.styles.css";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const SignUpSignIn = ({currentUser}) => {
  auth.onAuthStateChanged((user) => createUserProfileDocument(user));
  return (
    <div className="sign-up-sign-in">
      <SignIn />
      <SignUp />
      { currentUser === null ? null : <Redirect to="/"/>}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(SignUpSignIn);
