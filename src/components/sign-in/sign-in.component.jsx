import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { setCurrentUser } from "../../redux/user/user.actions";

import "./sign-in.styles.css";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    if (!email) {
      return alert("The email address can't be null");
    }

    if (!password) {
      return alert("The password can't be null");
    }

    signInWithEmailAndPassword(auth, email, password)
      ? alert("Succesfully logged in")
      : alert(
          "Sorry, the email and password don't match with any register in our database"
        );
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-sign-in">
        <h2
          style={{
            fontFamily:
              "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontSize: "150%",
          }}
        >
          Sign-In
        </h2>

        <FormInput
          value={this.state.email}
          handleChange={this.handleChange}
          name="email"
          type="email"
          label="Email"
        />

        <FormInput
          value={this.state.password}
          handleChange={this.handleChange}
          name="password"
          type="password"
          label="Password"
        />
        <div className="sign-up-buttons">
          <CustomButton
            type="submit"
            innerText="Sign-In"
            style={{ backgroundColor: "#FFFFFF" }}
          />

          <CustomButton
            type="button"
            innerText="Sign-In With Google"
            style={{ backgroundColor: "#ff6b35", color: "white" }}
            onClick={async () => {
              const user = await signInWithGoogle();
              this.props.defineCurrentUser(user);
            }}
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  defineCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
