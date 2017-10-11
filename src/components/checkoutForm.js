import React from 'react';

class CheckoutForm extends React.Component {
	createOrder(event) {
		event.preventDefault();
		const order = {
			firstName: this.firstName.value,
			lastName: this.lastName.value,
			email: this.email.value,
			mobile: this.mobile.value,
			address: this.address.value,
			cart: this.props.cart
		}
		this.props.addToOrder(order);
		this.checkoutForm.reset();
		$('#checkoutForm').modal('hide');
		this.props.clearCart();

	}

	render() {
		return (
			<div className="modal fade" id="checkoutForm" tabIndex="-1" aria-labelledby="modalLabel">
				<div className="modal-dialog" role="form">
					<div className="modal-content">
					  	<div className="modal-body">
						    <div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h3 className="modal-title" id="modalLabel">
									Checkout Form
								</h3>
						    </div>
					    	<form ref={(input) => this.checkoutForm = input} onSubmit={(e) => this.createOrder(e)} >
								<div className="form-group">
									<label className="sr-only" htmlFor="inputFirstName">First Name</label>
									<input ref={(input) => this.firstName = input} className="form-control" type="text" id="inputFirstName" 
									placeholder="First Name" />
								</div>

								<div className="form-group">
									<label className="sr-only" htmlFor="inputLastName">Last Name</label>
									<input ref={(input) => this.lastName = input} className="form-control" type="text" id="inputLastName" 
									placeholder="Last Name" />
								</div>

								<div className="form-group">
									<label className="sr-only" htmlFor="inputEmail">Email</label>
									<input ref={(input) => this.email = input} className="form-control" type="email" id="inputEmail" 
									placeholder="Email" />
								</div>

								<div className="form-group">
									<label className="sr-only" htmlFor="mobileNumber">Mobile</label>
									<input ref={(input) => this.mobile = input} className="form-control" type="text" id="mobileNumber" 
									placeholder="Mobile" />
								</div>

								<div className="form-group">
									<label className="sr-only" htmlFor="address">Address</label>
									<input ref={(input) => this.address = input} className="form-control" type="text" id="address" 
									placeholder="Address" />
								</div>
								<div className="modal-footer">
								    <button type="submit" className="btn btn-success btn-block btn-square">
								      Create Order
								    </button>
								</div>
							</form>
					  	</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CheckoutForm;