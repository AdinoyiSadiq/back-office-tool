import React from 'react';

class Nav extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container">
						<div className="navbar-header">
							<a href="#" className="navbar-brand">
								ABC Corp
							</a>
						</div>
						<ul className="nav navbar-nav">
							<li><a href="/">STORE</a></li>
							<li><a href="/customers">CUSTOMERS</a></li>
					        <li><a href="/orders">ORDERS</a></li>
					        <li><a href="/sales">SALES</a></li>
						</ul>
						<button type="button" className="btn btn-default navbar-btn navbar-right sign-in-out">
							Sign Out
						</button>
					</div>
				</nav>
			</div>		
		);
	}
}

export default Nav;
