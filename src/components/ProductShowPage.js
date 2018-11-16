import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import { Product } from '../requests';

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      product: null,
    };
    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview(reviewId) {
    const {
      product,
      product: { reviews },
    } = this.state;

    this.setState({
      product: {
        ...product,
        reviews: reviews.filter(r => r.id !== reviewId),
      },
    });
  }

  componentDidMount() {
    Product.one(this.props.match.params.id).then(product => {
      this.setState({
        isLoading: false,
        product,
      });
    });
  }

  render() {
    const { product, isLoading } = this.state;
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <div className="ProductShowPage">
        <ProductDetails {...product} />
        <ReviewList
          onReviewDeleteClick={this.deleteReview}
          reviews={product.reviews}
        />
      </div>
    );
  }
}

export default ProductShowPage;
