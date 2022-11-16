import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="bg-[#7a8ec4] min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<BlogDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}
// #0b1940
// #273046
export default App;
