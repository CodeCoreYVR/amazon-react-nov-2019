import React from 'react';

function ProductForm(props) {
  return (
    <div className="ProductForm">
      <form onSubmit={props.onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={e => props.onChange({ title: e.currentTarget.value })}
            type="text"
            name="title"
            value={props.title}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={e =>
              props.onChange({ description: e.currentTarget.value })
            }
            type="text"
            name="description"
            value={props.description}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            onChange={e =>
              props.onChange({ price: parseInt(e.currentTarget.value) })
            }
            type="number"
            name="price"
            value={props.price}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ProductForm;
