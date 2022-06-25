import {
  BrowserRouter, 
  Route, 
  Routes,
} from "react-router-dom";

import { Home } from "@/pages/Home";
import { Dashboard } from "@/pages/Dashboard";
import { Login } from "@/pages/Login";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
} 