import React from 'react';

class Item extends React.Component {
	render() {
		const { details, index } = this.props;
		const isAvailable = details.status === 'available';
		const buttonText = isAvailable ? 'Add To Cart' : 'Out Of Stock';
		return (
			<section className="col-md-6 panel panel-default">
				<img className="icon" src={details.image} alt="Icon" />
				<div className="panel-heading">
					<h3 className="panel-title">{details.name}</h3>
				</div>
				<div className="panel-body">
					<p>{details.desc}</p>
				</div>
				<button className="btn btn-primary btn-block btn-square" 
						disabled={!isAvailable} 
						onClick={() => this.props.addToCart(index)}>
					{buttonText }
				</button>
			</section>
		)
	}
}

export default Item;