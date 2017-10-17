import React from 'react';
import Sale from './sale';

class Sales extends React.Component {
	render() {
		return (
			<div className="content container">
				<div className="row">
					<section className="col-md-12 order-data">
						<header>SALES</header>
						<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
							{
								Object.keys(this.props.sales)
							    	  .map(key => <Sale key={key} 
							    	  					index={key} 
							    	  					details={this.props.sales[key]} 
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

export default Sales;