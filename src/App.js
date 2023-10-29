import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import { useState } from "react";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");
  const [alert, setalert] = useState(null);
  const [textcolr, settextcolr] = useState("white");
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const darkblue = () => {
    document.body.style.backgroundColor = "#151658";
    document.body.style.color = "white";
    showAlert("dark mode is enabled", "success");
    setmode("dark");
    settextcolr("gray");
  };
  const light = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    showAlert("light mode is enabled", "success");
    setmode("white");
  };
  const seatalBlack = () => {
    // document.body.style={{backgroundimage: `url(${image})`}}
    document.body.style.color = "red";
    showAlert("seatalMode is activated", "success");
    setmode("black");
  };
  const redblack = () => {
    document.body.style.backgroundColor = "#601d03";
    document.body.style.color = "red";
    showAlert("red-white mode is activated", "success");
    settextcolr("#a5aba2");
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          // togglemode={togglemode}
          aboutus="about us"
          home="home"
          mode={mode}
          darkblue={darkblue}
          light={light}
          redblack={redblack}
          seatalBlack={seatalBlack}
          // settextcolr={settextcolr}
        />
        <Alerts alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextFrom
                  heading="this is text from"
                  showAlert={showAlert}
                  settextcolr={textcolr}
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
