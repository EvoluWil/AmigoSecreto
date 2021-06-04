import './App.css';
import Routes from './routes';
import logo from "./assets/logo.svg"

function App() {

  return (
    <div className="App">
      <img className="logo" src={logo} height="40px" alt="Gift" />
      <label className="logo">Gift</label>
      <div className="content">
        <Routes/>
      </div>
    </div>
  );
}
export default App;
