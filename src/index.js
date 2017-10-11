import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Nav from './components/nav';
import Store from './components/store';
import Customers from './components/customers';
import Orders from './components/orders';
import Sales from './components/sales';
import NotFound from './components/NotFound';
import sampleItems from './sample-items';

class App extends React.Component {
	constructor() {
		super();
		
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
		this.clearCart = this.clearCart.bind(this);
		this.addToOrder = this.addToOrder.bind(this);


		this.state = {
			carpets: {},
			juice: {},
			cart: {},
			orders: {},
			sales: {},
			customers: {}
		};

		this.baseCardState = this.state.cart
	}

	componentDidMount() {
		this.setState({
			carpets: sampleItems.carpets,
			juice: sampleItems.juice

		});
	}

	addToCart(key) {
		const cart = {...this.state.cart};
		cart[key] = cart[key] + 1 || 1;
		this.setState({ cart });
	}

	removeFromCart(key) {
		const cart = {...this.state.cart};
		delete cart[key];
		this.setState({ cart });
	}

	clearCart() {
		const baseCardState = {...this.baseCardState};
		this.setState({ cart: baseCardState })
	}

	addToOrder(order){
		const orders = {...this.state.orders};
		const id = Date.now();
		orders[`order-${id}`] = order;
		this.setState({ orders });
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Match exactly pattern="/" render={(props) => ( <Store carpets={this.state.carpets} 
																		   juice={this.state.juice}
																		   cart={this.state.cart} 
																		   addToCart={this.addToCart}
																		   addToOrder={this.addToOrder} 
																		   removeFromCart={this.removeFromCart} 
																		   clearCart={this.clearCart}/>)} />
					<Match exactly pattern="/customers" component={Customers} />
					<Match exactly pattern="/orders" component={Orders} />
					<Match exactly pattern="/sales" component={Sales} />
					<Miss component={NotFound} />
				</div>
			</BrowserRouter>
		)
	}
}

render(
	<div>
		<Nav/>
		<App/>
	</div>
	, document.querySelector('.render-target'));

