import { Route } from "react-router-dom"; // Needs to be activated with { BrowserRouter } in top layer
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";

// localhost:3000/welcome
// localhost:3000/product
function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
    </div>
  );
}

export default App;
