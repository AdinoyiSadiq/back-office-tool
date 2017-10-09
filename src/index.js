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
		
		this.state = {
			carpets: {},
			juice: {},
			cart: {},
			order: {},
			sales: {},
			customers: {}
		};
	}

	componentDidMount() {
		this.setState({
			carpets: sampleItems.carpets,
			juice: sampleItems.juice

		});
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Match exactly pattern="/" render={(props) => ( <Store carpets={this.state.carpets} juice={this.state.juice} />)} />
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

