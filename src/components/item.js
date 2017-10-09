import React from 'react';

class Item extends React.Component {
	render() {
		return (
			<section className="col-md-6 panel panel-default">
				<img className="icon" src={this.props.details.image} alt="Icon" />
				<div className="panel-heading">
					<h3 className="panel-title">{this.props.details.name}</h3>
				</div>
				<div className="panel-body">
					<p>{this.props.details.desc}</p>
				</div>
				<button className="btn btn-primary btn-block btn-square">
					Add To Cart
				</button>
			</section>
		)
	}
}

export default Item;