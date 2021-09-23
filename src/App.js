import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Main />
  </BrowserRouter>
    </div>
  );
}

export default App;
