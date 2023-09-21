import "./App.css"
import React, { useEffect, useState } from "react";
import Paginate from "./component/Paginate";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();

    if (data && data.products && data.products.length) {
      setProducts(data.products);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(products);
  const productsPerPage = 5;
  const indexLastProduct = productsPerPage * currentPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct)
  console.log(currentProducts);

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      {
        products.length > 0 && <div className="">
          {
            currentProducts.map((product, index) => {
              return (
                <span className="products" key={index}>
                  <img src={product.thumbnail} alt="product-img" />
                  <h3>{product.title}</h3>
                </span>
              )
            })
          }
        </div>
      }
      <Paginate productsPerPage={productsPerPage} paginate={paginate} totalProducts={products.length} />
    </div>
  );
}

export default App;
