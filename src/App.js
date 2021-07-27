import { BrowserRouter, Route } from "react-router-dom";
import Register from "./Components/Register";
import AccessPage from "./Pages/AccessPage";
import LogInPage from "./Pages/LogInPage";
import HomePage from "./Pages/HomePage";
import GlobalState from "./Context/GlobalState";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Route path="/" exact component={AccessPage} />
        <Route path="/login" exact component={LogInPage} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={HomePage} />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
