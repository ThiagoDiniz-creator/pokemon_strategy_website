import React from "react";
import "./sign-up.styles.css";

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }
}

export default SignUp;