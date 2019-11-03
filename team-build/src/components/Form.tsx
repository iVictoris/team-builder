import React, { useState } from "react";

const Form: React.FC = () => {
  const [userInfo, setUserInfo] = useState({ name: "", title: "" });
  return (<form onSubmit={e => e.preventDefault()}>

  </form>);
};

export default Form;
