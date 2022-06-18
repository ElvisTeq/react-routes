import { useParams } from "react-router-dom"; // To consume Param

const ProductDetail = () => {
  const params = useParams();

  // {params.productId} => "/:productId" from "App.js"
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
