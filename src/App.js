import { BrowserRouter, Route } from "react-router-dom";
import Register from "./Components/Register";
import AccessPage from "./Pages/AccessPage";
import LogInPage from "./Pages/LogInPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={AccessPage} />
        <Route path="/login" exact component={LogInPage} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
