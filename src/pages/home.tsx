import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  const img = [
    { url: "../assets/Cam1.jpg" },
    // { url: "/Cam2.jfif" },
    // { url: "/Cam3.webp" },
  ];
  return (
    <div className="home">
      <section>
        <img
          className="img"
          src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtZXJhJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"
        ></img>
      </section>

      <h1>
        Latest Product{" "}
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="QWERT"
          name="Macbook"
          price={2342}
          stock={234}
          handler={addToCartHandler}
          photo="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-config-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1664499515473"
        />
      </main>
    </div>
  );
};

export default Home;
