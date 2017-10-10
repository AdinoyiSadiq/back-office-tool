import React from 'react'; 
import { formatPrice } from '../helpers';
import CartItem from './cartitem'; 

class Cart extends React.Component {
	constructor() {
		super();
		this.renderItem = this.renderItem.bind(this);
	}

	renderItem(key) {
		const carpet = this.props.carpets[key];
		const juice = this.props.juice[key];
		const count = this.props.cart[key];

		if(carpet) {
			return <CartItem key={key} 
							 details={carpet} 
							 count={count} />
		} else if (juice) {
			return <CartItem key={key} 
							 details={juice} 
							 count={count} />
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
			<section className="col-md-3 cart">
				<div className="cartHeading">
					<header>CART</header>
					<p>
						<strong>Total: </strong> 
						&#8358;{formatPrice(total)}
					</p>
					<button className="btn btn-primary btn-lg">
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
		);
	}
}

export default Cart;