import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth } from "../../firebase/firebase.utils";
import { passwordStrength } from "check-password-strength";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { setCurrentUser } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import "./sign-up.styles.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { password, repeatPassword, email } = this.state;

    if (!email) {
      return alert("Please fill your email properly");
    }

    if (!password || !repeatPassword) {
      return alert("Please fill the password and confirm password properly");
    }

    if (password !== repeatPassword) {
      return alert("Both the passwords need to be equal");
    }

    if (!(passwordStrength(password).value === "Strong")) {
      return alert(
        "Use a stronger password (use special symbols, upper and lower case letters, numbers and a long password)"
      );
    }
    const user = createUserWithEmailAndPassword(auth, email, password)
      ? alert("You were registered sucessfully")
      : alert("Sorry, we're unable to register you. Please try again later");
    this.props.defineCurrentUser(user);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-sign-up" method="none">
        <h2
          style={{
            fontFamily:
              "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontSize: "150%",
          }}
        >
          Sign-Up
        </h2>

        <FormInput
          value={this.state.displayName}
          handleChange={this.handleChange}
          name="displayName"
          type="text"
          label="Username"
        />

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

        <FormInput
          value={this.state.repeatPassword}
          handleChange={this.handleChange}
          name="repeatPassword"
          type="password"
          label="Confirm password"
        />

        <div className="sign-up-buttons">
          <CustomButton
            type="submit"
            innerText="Sign-Up"
            style={{ backgroundColor: "#758bfd", color: "white" }}
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  defineCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
