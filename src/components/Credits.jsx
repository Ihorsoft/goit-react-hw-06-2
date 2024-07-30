import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import { getProductById } from "../fakeApi";

// export default function Credits() {
const Credits = () => {
  const { id } = useParams();
  const product = getProductById(id);
  console.log("Credits on", id);

  console.log("Credits location on", location);

  return (
    <section>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Details of Product - {product.name} - {id}
        </h2>
        <p>Credits now</p>
      </div>
    </section>
  );
};
export default Credits;
