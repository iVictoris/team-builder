import React, { useState, ChangeEvent, ReactNode } from "react";
import { string } from "prop-types";

interface iProps {
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  children?: ReactNode;
  userInfo: {
    [key: string]: string;
    name: string;
    email: string;
    title: string;
  };
}

const Form: React.FC<iProps> = ({ handleChange, handleSubmit, userInfo }) => {
  const { name, email, title } = userInfo;
  return (
    <form onSubmit={e => handleSubmit(e)} className="form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => handleChange(e)}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={e => handleChange(e)}
      />

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={e => handleChange(e)}
      />

      <input type="submit" value="add member" />
    </form>
  );
};

export default Form;
