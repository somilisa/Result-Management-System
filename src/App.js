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
        <div class="table-wrapper">
          <h2>FRONTEND INTERNS</h2>
          <div className="table">
            <div className="table-header">
              <p>Name</p>
              <p>Attendance</p>
              <p>Appraisal</p>
              <p>Total</p>
            </div>
            {sortedInterns.map((intern) => (
              <InternCard
                key={intern.id}
                {...intern}
                overallGrade={intern.overallGrade}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
