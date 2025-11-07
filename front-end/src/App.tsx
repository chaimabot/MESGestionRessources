import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import MachineList from "./pages/machines/MachineList";
import BreakdownsList from "./pages/breakdowns/BreakdownsList";
import OperatorsManagement from "./pages/operators/OperatorsManagement";
import InterventionList from "./pages/interventions/InterventionList";
import StockManagement from "./pages/stocks/StockManagement";
import AlertManagement from "./pages/alerts/AlertManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/machines" element={<MachineList />} />
        <Route path="/breakdowns" element={<BreakdownsList />} />
        <Route path="/operators" element={<OperatorsManagement />} />
        <Route path="/interventions" element={<InterventionList />} />
        <Route path="/stocks" element={<StockManagement />} />
        <Route path="/alerts" element={<AlertManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
