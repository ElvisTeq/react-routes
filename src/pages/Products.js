import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>The Product Page</h1>
      <ul>
        <li>
          <Link to="products/p1">Computer</Link>
        </li>
        <li>
          <Link to="products/p2">Phone</Link>
        </li>
        <li>
          <Link to="products/p3">Book</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
