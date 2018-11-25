import React from 'react';
import FormErrors from './FormErrors/FormErrors';

function ProductForm(props) {
  return (
    <div className="ProductForm">
      <form onSubmit={props.onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={e =>
              props.onChange({
                title: e.currentTarget.value,
              })
            }
            type="text"
            name="title"
            value={props.title}
          />
          <FormErrors forField="title" errors={props.errors} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={e =>
              props.onChange({
                description: e.currentTarget.value,
              })
            }
            type="text"
            name="description"
            value={props.description}
          />
          <FormErrors forField="description" errors={props.errors} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            onChange={e =>
              props.onChange({
                price: parseInt(e.currentTarget.value),
              })
            }
            type="number"
            name="price"
            value={props.price}
          />
          <FormErrors forField="price" errors={props.errors} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ProductForm;
