import React from "react";
import "./App.css";
import { sortedInterns } from "./data";
import InternCard from "./singleIntern";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>Learnable</nav>
      </header>
      <main>
        <h2>FRONTEND INTERNS</h2>
        <div className="table-wrapper">
          <div className="table">
            <div className="table-header">
              <p>Rank</p>
              <p>Name</p>
              <p>Attendance</p>
              <p>Appraisal</p>
              <p>Total</p>
            </div>
            {sortedInterns.map((intern, index) => (
              <InternCard key={intern.id} rank={index + 1} {...intern} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
