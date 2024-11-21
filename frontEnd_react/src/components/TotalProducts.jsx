import React, { useState, useEffect } from 'react';
import productService from '../apis/productService'; // Importa el servicio

const TotalProducts = () => {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    productService.getTotalProducts()
      .then(total => setTotalProducts(total))
      .catch(error => console.error('Error fetching total products:', error));
  }, []);

  return (
    <div className="card">
      <h2 className="card-title">Total Products</h2>
      <p className="card-text">{totalProducts}</p>
    </div>
  );
};

export default TotalProducts;