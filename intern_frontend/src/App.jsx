import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leaderboard from "./components/Leaderboard";
function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/dashboard" element={< Dashboard/>} />
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;