var App = React.createClass({
	render: function() {
		return (
			<div>
				<AppHeader />
				<div className="container">
					<h1>Home</h1>
					<p>Hello Coffee Stain!</p>
					<AppFooter />
				</div>
			</div>
		);
	}
});