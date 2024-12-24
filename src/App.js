import "bootstrap/dist/css/bootstrap.min.css";
import Classes from "./App.module.css";
import Header from "./components/header/Header";
import Home from "./components/Home";
import Contact from "./components/Contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={Classes.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
