import React from 'react';

class Customer extends React.Component {
	render() {
		const { details, index } = this.props;
		const hashed = '#' + index;
		return (
			<div className="panel panel-default">
				<div className="panel-heading" role="tab" id="headingOne">
					<h4 className="panel-title">
						<a href={hashed} role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls={index}>
							<div className="customerName">
								{details.firstName} {details.lastName}
							</div> 
						</a>
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
					        <tbody>
					        	<tr>
					        	<td><strong>Order ID</strong></td>
					        	{	
									details.id.map(key => <td key={key}>{key}</td>)
								}
					       		</tr>
					        </tbody>
				      	</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Customer;