import Button from "./components/Button";
import Status from "./components/Status";
import Product from "./components/Product";
import './app.css'

function App() {
  return (
    <div className="card">
      <Status />
      <Button />
      <Product />
    </div>
  );
}

export default App;
