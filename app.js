import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Tour from "./src/pages/tour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tour" element={<Tour />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
