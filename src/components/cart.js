import React from 'react'; 
import { formatPrice } from '../helpers';
import CheckoutForm from './checkoutForm';

class Cart extends React.Component {
	constructor() {
		super();
		this.renderItem = this.renderItem.bind(this);
	}

	renderItem(key) {
		const carpet = this.props.carpets[key];
		const juice = this.props.juice[key];
		const count = this.props.cart[key];
		const removeButton = <button type="button" className="close" onClick={() => this.props.removeFromCart(key)} >&times;</button>

		if(carpet) {
			return (
				<li key={key} className="list-group-item">
					<strong>{count}</strong> { carpet.name } {removeButton}<span className="badge">&#8358; {formatPrice(count * carpet.price)}</span> 
				</li>)
		} else if (juice) {
			return (
				<li key={key} className="list-group-item">
					<strong>{count} {removeButton}</strong> { juice.name } <span className="badge">&#8358; {formatPrice(count * juice.price)}</span>
				</li>)
		} 
	}

	render() {
		const cartIds = Object.keys(this.props.cart);
		const total = cartIds.reduce((prevTotal, key) => {
			const carpet = this.props.carpets[key];
			const juice = this.props.juice[key];
			const count = this.props.cart[key];
			const carpetIsAvailable = carpet && carpet.status == 'available';
			const juiceIsAvailable = juice && juice.status == 'available';
			if(carpetIsAvailable) {
				return prevTotal + (count * carpet.price || 0)
			} else if (juiceIsAvailable) {
				return prevTotal + (count * juice.price || 0)
			}
			return prevTotal;
		}, 0);
		return (
			<div>
				<section className="col-md-3 cart">
					<div className="cartHeading">
						<header>CART</header>
						<p>
							<strong>Total: </strong> 
							&#8358;{formatPrice(total)}
						</p>
						<button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#checkoutForm">
							Checkout
						</button>
					</div>
					<div className="row">
						<section className="col-md-12 cartItems">
							<ul className="list-group">
								{cartIds.map(this.renderItem)}
							</ul>
						</section>
					</div>
				</section>
				<CheckoutForm cart={this.props.cart} 
							  addToOrder={this.props.addToOrder}
							  clearCart={this.props.clearCart}/>
			</div>
		);
	}
}

export default Cart;