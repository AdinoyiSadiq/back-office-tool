import React from 'react';
import Order from './order'; 

class Orders extends React.Component {
	
	render() {
		return (
			<div className="content container">
				<div className="row">
					<section className="col-md-12 order-data">
						<header>ORDERS</header>
						<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
							{
								Object.keys(this.props.orders)
							    	  .map(key => <Order key={key} 
							    	  					 index={key} 
							    	  					 details={this.props.orders[key]} 
							    	  					 carpets={this.props.carpets} 
														 juice={this.props.juice}
														 addToSales={this.props.addToSales}
														 removeFromOrder={this.props.removeFromOrder}
														 customerState={this.props.customerState}/>)
							}
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default Orders;