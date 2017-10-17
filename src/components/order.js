import React from 'react';
import OrderItem from './orderItem'; 

class Order extends React.Component {
	render() {
		const { details, index } = this.props;
		const hashed = '#' + index;
		return (
			<div className="panel panel-default">
				<div className="panel-heading" role="tab" id="headingOne">
					<h4 className="panel-title">
						<a href={hashed} role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls={index}>
							<span className="customerName">
								{index}	
							</span> 
						</a>
						<span>
							<button type="button" 
									className="btn btn-default pull-right sold"
									onClick={() => {this.props.addToSales(index); this.props.customerState()}}>Sold</button> 
									
							<button type="button" 
									className="btn btn-default pull-right delete-order"
									onClick={() => this.props.removeFromOrder(index)}>Delete Order</button>
						</span>
						<div className="clearfix"/> 
					</h4>
				</div>

				<div className="panel-collapse collapse" id={index} role="tabpanel">
					<div className="panel-body table-responsive">
						<p>Customer Details</p>
						<table className="table">
					        <thead>
					         	<tr>
						            <th>First Name</th>
						            <th>Last Name</th>
						            <th>Email Address</th>
						            <th>Mobile</th>
						            <th>Residential Address</th>
					          	</tr>
					        </thead>
					        <tbody>
					        	<tr>
						            <td>{details.firstName}</td>
						            <td>{details.lastName}</td>
						            <td>{details.email}</td>
						            <td>{details.mobile}</td>
						            <td>{details.address}</td>
					          	</tr>
					        </tbody>
				      	</table>

				      	<p>Items Orders</p>
					    <OrderItem cart={details.cart} 
				  				   carpets={this.props.carpets} 
								   juice={this.props.juice}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Order;