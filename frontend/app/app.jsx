import React from 'react';
import {render} from 'react-dom';
import ProductList from './ProductList.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {products: []};
	}

	fetchProducts() {
		var request = new XMLHttpRequest();
		request.addEventListener('load', 
			(event) => (this.setState({products: JSON.parse(request.responseText)})));
	
		request.open("GET", 'http://api:3000/products');
		request.send();
	} 

	componentWillMount(){
		this.fetchProducts();
	}

	render() {
		return (
			<div>
			<h2> Products </h2> 
				<ProductList products={this.state.products} />
			</div>
			);
	}
}

render(<App/>, document.getElementById('container'))