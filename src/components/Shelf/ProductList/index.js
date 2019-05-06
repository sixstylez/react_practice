import React from 'react';

import Product from './Product';
import Filter from '../Filter';

function filterItems(selectedFilter) {
  return selectedFilter == this.props.filter;
}

const ProductList = ({ products }) => {
  return products.map(p => {
    return <Product product={p} key={p.id} />;
  });
};

console.log('productlist is ' + ProductList);

export default ProductList;
