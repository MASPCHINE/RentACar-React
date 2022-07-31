import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import style from "./App.module.scss";
import Information from "./components/Information/Information";

function App() {
  return (
    <div className={style.App}>
      <div className={style.App__main}>
      <BrowserRouter>
          <Header/>
      </BrowserRouter>
      </div>

      <Information/>
    </div>
  );
}

export default App;
