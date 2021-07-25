import { BrowserRouter, Route } from "react-router-dom";
import AccessPage from "./Pages/AccessPage";
import LogInPage from "./Pages/LogInPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={AccessPage} />
        <Route path="/login" exact component={LogInPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
