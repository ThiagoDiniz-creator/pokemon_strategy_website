import React from "react";
import "./form-input.styles.css";

const FormInput = ({ handleChange, label, ...otherprops }) => (
  <div className="group">
    {label ? <label className="form-input__label">{label}</label> : null}
    <input className="form-input" onChange={handleChange} {...otherprops} />
  </div>
);

export default FormInput;
