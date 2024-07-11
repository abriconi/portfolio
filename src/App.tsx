import "./App.scss";
import { Header } from "./components/Header";
import { MainInfo } from "./components/MainInfo";

function App() {
  return (
    <div className="layout">
      <div className="container container-main container-main-small">
        <MainInfo />
      </div>
      <div className="container container-main container-main-big">
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
        <Header />
      </div>
    </div>
  );
}

export default App;
