
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./register";
import { Login } from "./login";
import { Profile } from "./profile";

export function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
