import React from 'react';
import {render} from 'react-dom';

export default class ProductList extends React.Component {

	render(){
			return (
					<ul>
						{this.props.products.map( 
							(product, i) => <li key={i}> {product} <button>Add </button></li>
						)}
					</ul>
				);
	}
}