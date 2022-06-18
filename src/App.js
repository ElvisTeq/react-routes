import { Route, Switch, Redirect } from "react-router-dom"; // Needs to be activated with { BrowserRouter } in top layer
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./component/MainHeader"; // <li> of "href" for router "path"
import ProductDetail from "./pages/ProductDetail";

// localhost:3000/welcome
// localhost:3000/product

// <main> => only displays the content of the component (if href="path")

// ":productId" => passing URL Params to  <ProductDetail />

// <Switch> => allow only 1 route to be activated (finds/renders first match) (will not consider ":productId") because will match "/products"

// "exact" => (only run if exact URL)

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
