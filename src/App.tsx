import "./App.scss";
import { Header } from "./components/Header";
import { PersonalDetails } from "./components/PersonalDetails/PersonalDetails";

function App() {
  return (
    <div className="layout">
      <div className="container container-main container-main-small">
        <PersonalDetails />
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
