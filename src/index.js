import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import axios from 'axios';

import Nav from './components/nav';
import Store from './components/store';
import Customers from './components/customers';
import Orders from './components/orders';
import Sales from './components/sales';
import NotFound from './components/NotFound';
import sampleItems from './sample-items';

const password = "Adinoyi1234"

class App extends React.Component {
	constructor() {
		super();
		
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
		this.clearCart = this.clearCart.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
		this.removeFromOrder = this.removeFromOrder.bind(this);
		this.addToSales = this.addToSales.bind(this);
		this.customerState = this.customerState.bind(this);
		this.renderLogin = this.renderLogin.bind(this); 
		this.authenticate = this.authenticate.bind(this);
		this.logout = this.logout.bind(this);

		this.state = {
			carpets: {},
			juice: {},
			cart: {},
			orders: {},
			customers: {},
			sales: {},
			uid: {id: "idNeeded" },
			loading: true
		};

		this.baseCardState = this.state.cart
	}

	componentDidMount() {
		axios.get('http://localhost:8888/StateData/1').then((stateData) => {
			this.setState({
				carpets: stateData.data.carpets,
				juice: stateData.data.juice,
				cart: stateData.data.cart,
				orders: stateData.data.orders,
				sales: stateData.data.sales,
				customers: stateData.data.customers,
				uid:  stateData.data.uid
			});
		});
		setTimeout(() => {this.setState({loading: false}); }, 50);
	}

	componentWillUpdate(nextProps, nextState) {
		axios.post('http://localhost:8888/postStateData/1',
			JSON.stringify(nextState)
		).then((response) => {
    		console.log(response);
  		})
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

	removeFromOrder(key) {
		const orders = {...this.state.orders};
		delete orders[key];
		this.setState({ orders });
	}

	addToSales(key) {
		const sales = {...this.state.sales};
		const orders = {...this.state.orders}
		sales[key] = orders[key];
		this.setState({ sales });

		delete orders[key];
		this.setState({ orders });
	}

	customerState() {
		const sales = {...this.state.sales};
		const customers = {...this.state.customers};
		var customerData = {}

		for (var key in sales) {
			var fullName = (sales[key].firstName + sales[key].lastName);
			var address = sales[key].address;
			var email = sales[key].email;
			var mobile = sales[key].mobile;
			var firstName = sales[key].firstName;
			var lastName = sales[key].lastName;
			
			customerData[fullName] = {}
			customerData[fullName].address = address;
			customerData[fullName].email = email;
			customerData[fullName].mobile = mobile;
			customerData[fullName].firstName = firstName;
			customerData[fullName].lastName = lastName;
			customerData[fullName].id = []
		}

		for (var key in sales) {
			if (sales.hasOwnProperty(key)) {

		    	var fullName = (sales[key].firstName + sales[key].lastName); 
		    	customerData[fullName].id.push(key)
		    }
		}

		this.setState({ customers: customerData});

		console.log(customers);
	}

	authenticate(event) {
		event.preventDefault();

		const verify = {
			userName: this.userName.value,
			password: this.password.value,
		}

		const verifyID = verify.userName + verify.password 
		console.log(verifyID);

		if(verifyID === password) {
			this.setState({ uid: {id: password }});
		} else {
			this.setState({ uid: {id: "idNeeded" }});
		}

		this.loginForm.reset();
	}

	logout() {
		this.setState({ uid: {id: "idNeeded" }});
		window.location.reload();
	}

	renderLogin() {
		const id = {...this.state.uid};
		return (
			<form className="login-form" ref={(input) => this.loginForm = input} onSubmit={(e) => this.authenticate(e)}>
			    <h1 className="loginheader">Staff Login</h1>
			    <div className="form-group ">
			    	<input ref={(input) => this.userName = input} 
			    		   type="text" className="form-control" placeholder="Username" id="UserName" />
			    	<i className="fa fa-user"></i>
			    </div>
			    <div className="form-group log-status">
			    	<input ref={(input) => this.password = input}
			    		   type="password" className="form-control" placeholder="Password" id="Password" />
			    	<i className="fa fa-lock"></i>
			    </div>
			    <button type="submit" className="log-btn">Log in</button>
			</form>
		)
	}

	render() {
		if (this.state.loading) {
  			return ( 
		    <div className='my-nice-tab-container'>
		      <div className='loading-state'>.</div>
		    </div>)
		} else {
			if(this.state.uid.id === "idNeeded") {
				return <div>{this.renderLogin()}</div>
			} else if (this.state.uid.id === password){
				return (
					<div>
						<Nav logout={this.logout}/>
						<BrowserRouter>
							<div>
								<Match exactly pattern="/" render={(props) => ( <Store carpets={this.state.carpets} 
																					   juice={this.state.juice}
																					   cart={this.state.cart} 
																					   addToCart={this.addToCart}
																					   addToOrder={this.addToOrder} 
																					   removeFromCart={this.removeFromCart} 
																					   clearCart={this.clearCart}/>)} />

								<Match exactly pattern="/customers" render={(props) => ( <Customers customers={this.state.customers}
																									carpets={this.state.carpets}
																							  		juice={this.state.juice}/>)}/>

								<Match exactly pattern="/orders" render={(props) => ( <Orders orders={this.state.orders}
																							  carpets={this.state.carpets}
																							  juice={this.state.juice} 
																							  addToSales={this.addToSales}
																							  removeFromOrder={this.removeFromOrder}
																							  customerState={this.customerState}/>)} />

								<Match exactly pattern="/sales" render={(props) => ( <Sales sales={this.state.sales}
																							carpets={this.state.carpets}
																							juice={this.state.juice} />)} />
								<Miss component={NotFound} />
							</div>
						</BrowserRouter>
					</div>
				)
			}
		}
	}
}

render(
	<div>
		<App/>
	</div>
	, document.querySelector('.render-target'));

