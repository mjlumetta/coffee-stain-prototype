var AppHeader = React.createClass({
	render: function() {
		return (
			<header className="navbar navbar-fixed-top navbar-inverse">
				<div className="container">
					<nav>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Projects</a></li>
							<li><a href="#">Log In</a></li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
});