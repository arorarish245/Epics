import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WaterFilter from "./component/filter";
import ControlButtons from "./component/Buttons";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WaterFilter />} />
        <Route
          path="/buttons"
          element={
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
              <ControlButtons
                onPour={() => alert("Pouring water...")}
                onHeat={() => alert("Heating water...")}
                onScan={() => alert("Scanning container...")}
                onDispense={() => alert("Dispensing water...")}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
