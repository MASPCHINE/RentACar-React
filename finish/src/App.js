import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Information from "./components/Information/Information";
import MainCar from "./components/MainCar/MainCar";

import style from "./App.module.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={style.App}>
      <div className={style.App__main}>
        <section>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </section>
        <section>
          <Information />
          <MainCar />
        </section>
        <section>
          <Footer></Footer>
        </section>
      </div>
    </div>
  );
}

export default App;
