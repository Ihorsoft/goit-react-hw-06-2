import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { BackLink } from "../components/BackLink";
import { getProductById } from "../fakeApi";

export default function ProductDetails() {
  const [loc, setLoc] = useState(useLocation());
  const { id } = useParams();
  const product = getProductById(id);
  console.log("ProductDetail Location state: ", loc.state);
  const backLinkHref = loc.state ?? "/products";

  return (
    <main>
      <BackLink to={backLinkHref}>Back to {loc.state.pathname}</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
      <ul>
        <li>
          <Link to="credits" state={loc}>
            Credits
          </Link>
        </li>
        <li>
          <Link to="reviews" state={loc}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
