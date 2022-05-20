import Cart from "../src/sections/cart";
import Details from "../src/sections/details";

const IndexPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Details />
      <Cart />
    </div>
  );
};

export default IndexPage;
