import React from 'react'; 

class Inventory extends React.Component {
	render() {
		return (
			<section className="col-md-9 inventory">
				<header>INVENTORY</header>
				<div className="row">
					<ul className="nav nav-tabs" role="tablist">
						<li role="presentation" className="col-md-6 active">
							<a role="tab" data-toggle="tab" href="#carpets" className="inventoryTab">
								Carpets
							</a>
						</li>
						<li role="presentation" className="col-md-6">
							<a role="tab" data-toggle="tab" href="#juice" className="inventoryTab">
								Juice
							</a>
						</li>
					</ul>
				</div>

				<div className="tab-content items">
					<div role="tabpanel" className="tab-pane active" id="carpets">
						<div className="row" id="carpetItems">
							<p>Carpet List</p>
						</div>
					</div>

					<div role="tabpanel" className="tab-pane" id="juice">
						<div className="row" id="juicetItems">
							<p>Juice List</p>
						</div>
					</div>
				</div>

				
			</section>
		);
	}
}

export default Inventory;