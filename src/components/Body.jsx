import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ShimmerProductCard from "./shimmersUI";

const Body = () => {
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts(); // Its call the api only one (first) time
  }, []);

  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setTopRatedProducts(json);
    setIsLoading(false);
  };

  const topRatedProductsData = () => {
    setTopRatedProducts(
      topRatedProducts.filter((product) => product.rating.rate > 4)
    );
    console.log(topRatedProducts);
  };

  return (
    <section className="flex flex-col gap-4 px-2 py-2 ">
      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Search..."
          />
        </div>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={topRatedProductsData}
        >
          Top Rated Products
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 product-items">
        {isLoading
          ? Array(20) // Render 8 shimmer placeholders while loading
              .fill("")
              .map((_, index) => <ShimmerProductCard key={index} />)
          : topRatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
      </div>
    </section>
  );
};

export default Body;
