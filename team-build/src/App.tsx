import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Victor",
      title: "web dev"
    }
  ]);

  const teamMembers =
    team.length > 0
      ? team.map(member => {
          return (
            <>
              <div className="name">{member.name}</div>
              <div className="name">{member.title}</div>
            </>
          );
        })
      : null;

  return <div className="App">{teamMembers}</div>;
};

export default App;
