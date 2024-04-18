import React from "react";
import "./App.css";
import { sortedInterns } from "./data";
import InternCard from "./singleIntern";

function App() {
  const [selectedTrack, setSelectedTrack] = React.useState(null);

  const handleTrackFilter = (track) => {
    setSelectedTrack(track);
  };

  const filteredInterns = selectedTrack
    ? sortedInterns.filter((intern) => intern.track === selectedTrack)
    : sortedInterns;

  return (
    <div className="App">
      <header className="App-header">
        <nav>Learnable</nav>
      </header>
      <main>
        <div className="table-wrapper">
          <div class="track-buttons">
            <button onClick={() => handleTrackFilter("Front End")}>
              FRONTEND{" "}
            </button>
            <button onClick={() => handleTrackFilter("Back End")}>
              BACKEND{" "}
            </button>
            <button onClick={() => handleTrackFilter("Web3")}>WEB3 </button>
            <button onClick={() => handleTrackFilter("Product Design")}>
              PRODUCT DESIGN{" "}
            </button>
            <button onClick={() => handleTrackFilter(null)}>Show All</button>
          </div>
          <div className="table">
            <div className="table-header">
              <p>Rank</p>
              <p>Name</p>
              <p>Attendance</p>
              <p>Appraisal</p>
              <p>Total</p>
            </div>
            {filteredInterns.map((intern, index) => (
              <InternCard key={intern.id} rank={index + 1} {...intern} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
