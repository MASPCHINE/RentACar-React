import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Information from "./components/Information/Information";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard";

import style from "./App.module.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>

        <>
          <section>
            <Header />
          </section>
          <section>
            <Information />
          </section>
          <section>
            <Footer></Footer>
          </section>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
