import { Link, useLocation } from "react-router-dom";
import css from "./ProductList.module.css";

export const ProductListTrend = ({ products }) => {
  const location = useLocation();

  console.log("Trend Location state: ", location.state);

  return (
    <div className={css.container}>
      {products.map((product) => (
        <div key={product.id} className={css.cardWrapper}>
          <Link to={`/products/${product.id}`} state={location}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <h3 className={css.productName}>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
