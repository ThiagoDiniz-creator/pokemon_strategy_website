import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AccountPage = ({user}) => {
    const { currentUser } = user;

    if(currentUser){
      return <h1>Account Page</h1>;
    }else{
        return <Redirect to={"/login"} />
    }
};

const mapStateToProps = ({user}) => ({
    user,
})

export default connect(mapStateToProps, undefined)(AccountPage);
