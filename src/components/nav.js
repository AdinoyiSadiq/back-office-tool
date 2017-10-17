import React from 'react';

class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
				<div className="container">
					<div className="navbar-header">
						<a href="#" className="navbar-brand">
							ABC Corp
						</a>
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					    	<span className="sr-only">Toggle navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					    </button>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li><a href="/">STORE</a></li>
					        <li><a href="/orders">ORDERS</a></li>
					        <li><a href="/sales">SALES</a></li>
					        <li><a href="/customers">CUSTOMERS</a></li>
						</ul>
						<button type="button" 
								className="btn btn-default navbar-btn navbar-right sign-in-out"
								onClick={() => this.props.logout()}>
							Sign Out
						</button>
					</div>
				</div>
			</nav>		
		);
	}
}

export default Nav;
