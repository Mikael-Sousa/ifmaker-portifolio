import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/About";
import About from "../pages/About"
import Projects from "../pages/Projects"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
