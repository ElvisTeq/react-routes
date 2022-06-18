import { Route } from "react-router-dom"; // Needs to be activated with { BrowserRouter } in top layer
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./component/MainHeader"; // <li> of "href" for router "path"
import ProductDetail from "./pages/ProductDetail";

// localhost:3000/welcome
// localhost:3000/product
// <main> => only displays the content of the component (if href="path")
// ":productId" => passing URL Params to  <ProductDetail />
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
