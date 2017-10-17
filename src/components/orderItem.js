import React from 'react'; 
import { formatPrice } from '../helpers';

class OrderItem extends React.Component {
	constructor() {
		super();
		this.renderOrderItem = this.renderOrderItem.bind(this);
	}

	renderOrderItem(key) {
		const carpet = this.props.carpets[key];
		const juice = this.props.juice[key];
		const number = this.props.cart[key];


		if(carpet) {
			return (
				<tbody key={key}>
	        		<tr>
						<td>{carpet.name}</td>
				        <td>{number}</td>
				        <td>{formatPrice(number*carpet.price)}</td>
					</tr>
	        	</tbody>)
		} else if(juice) {
			return (
				<tbody key={key}>
	        		<tr>
						<td>{juice.name}</td>
			        	<td>{number}</td>
			        	<td>{formatPrice(number*juice.price)}</td>
			        </tr>
	        	</tbody>)
		} 
	}

	render() {
		const cartIds = Object.keys(this.props.cart);
		return (
			<table className="table">
				<thead>
		         	<tr>
			            <th>Item</th>
			            <th>Number</th>
			            <th>Price</th>
		          	</tr>
	        	</thead>
	        	{cartIds.map(this.renderOrderItem)}
			</table>);
	}
}

export default OrderItem;