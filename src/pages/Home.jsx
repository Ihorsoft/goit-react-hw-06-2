/* export default function Home() {
  return (
    <main>
      <h1>Welcome</h1>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>
    </main>
  );
} */

//++++++++++++++++
import { useSearchParams } from "react-router-dom";
import { ProductListTrend } from "../components/ProductListTrend";
import { SearchBox } from "../components/SearchBox";
import { getProducts } from "../fakeApi";
import axios from "axios";

export default function Home() {
  const products = getProducts();
  // get list Movies from site
  //const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"; // trending Movies
  // https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
  // https://api.themoviedb.org/3/movie/268?language=en-US   // Details Movies by id
  const url =
    " https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=batman"; // search for query
  // const url = "https://api.themoviedb.org/3/movie/268?language=en-US";  // for id=268
  // const url = "https://api.themoviedb.org/3/movie/268/credits?language=en-US";

  // https://api.themoviedb.org/3/movie/movie_id?language=en-US   total infotrmation about Movie by ID
  //https://api.themoviedb.org/3/movie/268/reviews?language=en-US&page=1  for review by id

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjY2ZTk0MWZmYTU1ZjQwZTBhYzhkOTI2YjZiMzM1YyIsIm5iZiI6MTcyMTgxOTQwNy45MTg4OSwic3ViIjoiNjZhMGFhZTFiZjZmMmVmMzVhYmY2NDIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.q0HDhHhOJSQwK_sJk6KCwaNZjjOPkgmiXNhiXh6WLN0",
    },
  };

  axios
    .get(url, options)
    .then((response) => console.log("HTTP to Movies:", response))
    .catch((err) => console.error(err));

  //+++++++++++++++++
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      {/* <SearchBox value={productName} onChange={updateQueryString} /> */}
      <ProductListTrend products={visibleProducts} />
    </main>
  );
}
//+++++++++++++++++++
