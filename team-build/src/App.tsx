import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

interface teamMember {
  id: number,
  name: string,
  email: string,
  title: string
}

const App: React.FC = () => {
  let id: number = 0;
  const initialUserInfo = { name: "", email: "", title: "" }
  const [team, setTeam] = useState<teamMember[]>([]);

  const [userInfo, setUserInfo] = useState({...initialUserInfo});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const teamMembers =
    team.length > 0
      ? team.map((member: teamMember) => {
          return (
            <div key={member.id}>
              <div className="name">{member.name}</div>
              <div className="name">{member.email}</div>
              <div className="name">{member.title}</div>
            </div>
          );
        })
      : null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTeam([...team, { id: ++id, ...userInfo }]);
    setUserInfo({...initialUserInfo})
  };

  return (
    <div className="App">
      <h2>Add Team Member Station:</h2>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userInfo={userInfo}
      />
      {teamMembers}
    </div>
  );
};

export default App;
