import React from 'react';
import Customer from './customer';

class Customers extends React.Component {
	render() {
		return (
			<div className="content container">
				<div className="row">
					<section className="col-md-12 order-data">
						<header>Customers</header>
						<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
							{
								Object.keys(this.props.customers)
							    	  .map(key => <Customer key={key} 
							    	  					index={key} 
							    	  					details={this.props.customers[key]} 
							    	  					carpets={this.props.carpets} 
														juice={this.props.juice}/>)
							}
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default Customers;