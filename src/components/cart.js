import React from 'react'; 

class Cart extends React.Component {
	render() {
		return (
			<section className="col-md-3 cart">
				<div className="cartHeading">
					<header>CART</header>
					<p>You have x items in your cart: Price</p>
					<button className="btn btn-primary btn-lg">
						Checkout
					</button>
				</div>
			</section>
		);
	}
}

export default Cart;