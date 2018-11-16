import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../requests';

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(productId) {
    this.setState({
      products: this.state.products.filter(q => q.id !== productId),
    });
  }

  componentDidMount() {
    Product.all().then(products => {
      this.setState({ products });
    });
  }

  render() {
    return (
      <div className="ProductIndexPage">
        <h1>Products</h1>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>
              <small>
                <em>{product.id}</em>
              </small>{' '}
              <Link to={`/products/${product.id}`}>{product.title}</Link>
              <button onClick={() => this.deleteProduct(product.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductIndexPage;
