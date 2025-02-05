import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import CoinPage from "./pages/Coin";
import Compare from "./pages/ComparePage";
import Watchlist from "./pages/Watchlist";

function App() {
  return <div className='App'>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/watchlist" element={<Watchlist/>} />
      </Routes>
    </BrowserRouter>
  </div>

}

export default App;
