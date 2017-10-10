import React from 'react';
import Inventory from './inventory'; 
import Cart from './cart'; 

class Store extends React.Component {
	render() {
		return (
			<div className="content container">
				<div className="row">
					<Inventory 
						carpets={this.props.carpets} 
						juice={this.props.juice} 
						addToCart={this.props.addToCart}/>
					<Cart 
						carpets={this.props.carpets} 
						juice={this.props.juice}
						cart={this.props.cart}/>
				</div>
			</div>
		);
	}
}

export default Store;