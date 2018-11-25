import React, { Component } from 'react';
import ProductForm from './ProductForm';
import { Session, Product } from '../requests';

class NewProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialProduct,
      errors: [],
    };
    this.updateField = this.updateField.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  updateField(param) {
    // expecting params to look like the following:
    // { title: "someValue" } or
    // { decription: "someValue" } or
    // { price: 12 }
    this.setState(param);
  }

  createProduct(e) {
    e.preventDefault();
    const { errors, ...product } = this.state;
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret',
    })
      .then(() => {
        return Product.create({
          ...product,
        });
      })
      .then(({ id, errors }) => {
        if (errors) {
          this.setState({ errors });
        } else {
          this.props.history.push(`/products/${id}`);
        }
      });
  }

  render() {
    return (
      <div className="NewProductPage">
        <ProductForm
          {...this.state}
          onChange={this.updateField}
          onSubmit={this.createProduct}
        />
      </div>
    );
  }
}

const initialProduct = {
  title: '',
  description: '',
  price: '',
};

export default NewProductPage;
