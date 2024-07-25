import "./App.scss";
import { DetailedInfo } from "./components/DetailedInfo/DetailedInfo";
import { MainInfo } from "./components/MainInfo/MainInfo";

function App() {
  return (
    <div className="layout">
      <div className="container container-main container-main-small">
        <MainInfo />
      </div>
      <div className="container container-main container-main-big">
        <DetailedInfo />
      </div>
    </div>
  );
}

export default App;


