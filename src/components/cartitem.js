import React from 'react';
import { formatPrice } from '../helpers'; 

class CartItem extends React.Component {
	render() {
		const { details, count } = this.props;
		return (
			<li className="list-group-item">
				<strong>{count}</strong> { details.name } <span className="badge">&#8358; {formatPrice(count * details.price)}</span>
			</li>
		);
	}
}

export default CartItem;