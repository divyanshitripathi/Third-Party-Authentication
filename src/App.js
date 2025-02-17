import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Login from "./Pages/Login.jsx";
import Hello from "./Pages/Hello.jsx";

function App() {
  return (
    <Theme>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/hello" element={<Hello />} />
          </Routes>
        </Router>
      </div>
    </Theme>
  );
}

export default App;
