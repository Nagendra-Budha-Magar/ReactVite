import { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { Outlet } from "react-router";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
