import { BrowserRouter, Route } from "react-router-dom";
import AccessPage from "./Pages/AccessPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={AccessPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
