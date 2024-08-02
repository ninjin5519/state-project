import React, { useState } from "react";
import List from "./list";

const Input = ({ handleChange }) => {
  const changeValue = (e) => {
    handleChange(e.target.value);
  };

  return (
    <div className="flex gap-5">
      <input
        className="border border-gray-400"
        type="text"
        onChange={changeValue}
      />
    </div>
  );
};

export default Input;
