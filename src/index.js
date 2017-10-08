import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Nav from './components/nav';
import Store from './components/store';
import Customers from './components/customers';
import Orders from './components/orders';
import Sales from './components/sales';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Store} />
				<Match exactly pattern="/customers" component={Customers} />
				<Match exactly pattern="/orders" component={Orders} />
				<Match exactly pattern="/sales" component={Sales} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(
	<div>
		<Nav/>
		<Root/>
	</div>
	, document.querySelector('.render-target'));

