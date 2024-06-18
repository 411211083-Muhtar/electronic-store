import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleSave = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container">
      <h1>Electronic Store</h1>
      <ProductForm selectedProduct={selectedProduct} onSave={handleSave} />
      <ProductList onEdit={handleEdit} />
    </div>
  );
};

export default App;
