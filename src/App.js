import React, { useState } from "react";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [changeColor, setChangeColor] = useState("red");
  const [changeColor1, setChangeColor1] = useState("green");
  const [changeColor2, setChangeColor2] = useState("yellow");
  const cnvt = () => {
    if (changeColor === "red") {
      setChangeColor("white");
      document.body.style.backgroundColor = "red";
      showAlert("Red mode has been enabled", "Success ");
    } else {
      setChangeColor("red");
      document.body.style.backgroundColor = "white";
      showAlert("white mode has been enabled", "Success ");
    }
  };
  const cnvt1 = () => {
    if (changeColor1 === "green") {
      setChangeColor1("white");
      document.body.style.backgroundColor = "green";
      showAlert("Green mode has been enabled", "Success ");
    } else {
      setChangeColor1("green");
      document.body.style.backgroundColor = "white";
      showAlert("White mode has been enabled", "Success ");
    }
  };
  const cnvt2 = () => {
    if (changeColor2 === "yellow") {
      setChangeColor2("white");
      document.body.style.backgroundColor = "yellow";
      showAlert("yellow mode has been enabled", "Success ");
    } else {
      setChangeColor2("yellow");
      document.body.style.backgroundColor = "white";
      showAlert("White mode has been enabled", "Success ");
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white  ";
      showAlert("Light mode has been enabled", "Success ");
    }
  };
  return (
    // <BrowserRouter>
      <div>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          cnvt={cnvt}
          cnvt1={cnvt1}
          cnvt2={cnvt2}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              {/* }
            /> */}
          {/* </Routes> */}
        </div>
      </div>
    // {/* </BrowserRouter> */}
  );
};

export default App;
