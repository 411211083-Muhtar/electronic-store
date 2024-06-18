import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ selectedProduct, onSave }) => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: ''
  });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product.id) {
      await axios.put(`/api/products/${product.id}`, product);
    } else {
      await axios.post('/api/products', product);
    }
    onSave();
    setProduct({ id: '', name: '', description: '', price: '', quantity: '', image: '' });
  };

  return (
    <div>
      <h2>{product.id ? 'Edit' : 'Add'} Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" className="form-control" value={product.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" className="form-control" value={product.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" name="price" className="form-control" value={product.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input type="number" name="quantity" className="form-control" value={product.quantity} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input type="text" name="image" className="form-control" value={product.image} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default ProductForm;
