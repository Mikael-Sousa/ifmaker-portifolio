import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/About";
import About from "../pages/About"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
