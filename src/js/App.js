import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './pages/Main';
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Sites from "./pages/Sites";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}>
          <Route path="sites" element={<Sites />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}