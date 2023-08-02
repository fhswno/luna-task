// CSS
import "./App.css";

// ROUTING
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

// COMPONENTS
import { DataTable } from "./components/DataTable";
import { DataCharts } from "./components/DataCharts";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="table" element={<DataTable />} />
        <Route path="charts" element={<DataCharts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
