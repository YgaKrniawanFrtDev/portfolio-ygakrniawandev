import './styles/App.css';
import Home from './pages/Home';
import React, { useEffect } from "react";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true,     // animasi hanya sekali
      offset: 120,    // jarak scroll sebelum trigger
    });
  }, []);
  return (
    <>
      <Home />
    </>
  )
}

export default App