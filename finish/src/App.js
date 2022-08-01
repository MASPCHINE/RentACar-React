import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import style from "./App.module.scss";
import Information from "./components/Information/Information";
import MainCar from "./components/MainCar/MainCar";

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
          
        </section>
      </div>
    </div>
  );
}

export default App;
