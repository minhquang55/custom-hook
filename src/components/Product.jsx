import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { product, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h1>{isLoading ? "Loading..." : "Fetch Success"}</h1>
      {product &&
        product.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
          );
        })}
    </div>
  );
};

export default Product;
