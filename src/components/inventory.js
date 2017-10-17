import React from 'react';
import Item from './item';  

class Inventory extends React.Component {
	render() {
		return (
			<section className="col-lg-9 col-md-12 col-sm-12 inventory">
				<header>INVENTORY</header>
				<div className="row">
					<ul className="nav nav-tabs" role="tablist">
						<li role="presentation" className="col-xs-6 active">
							<a role="tab" data-toggle="tab" href="#carpets" className="inventoryTab">
								Carpets
							</a>
						</li>
						<li role="presentation" className="col-xs-6">
							<a role="tab" data-toggle="tab" href="#juice" className="inventoryTab">
								Juice
							</a>
						</li>
					</ul>
				</div>

				<div className="tab-content items">
					<div role="tabpanel" className="tab-pane active" id="carpets">
						<div className="row" id="carpetItems">
							{
								Object.keys(this.props.carpets)
									  .map(key => <Item key={key} index={key} details={this.props.carpets[key]} addToCart={this.props.addToCart} />)
							}
						</div>
					</div>

					<div role="tabpanel" className="tab-pane" id="juice">
						<div className="row" id="juicetItems">
							{
								Object.keys(this.props.juice)
									  .map(key => <Item key={key} index={key} details={this.props.juice[key]} addToCart={this.props.addToCart} />)
							}
						</div>
					</div>
				</div>

				
			</section>
		);
	}
}

export default Inventory;