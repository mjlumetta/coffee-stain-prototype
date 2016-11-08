var App = React.createClass({
	render: function() {
		return (
			<div>
				<AppHeader />
				<div className="container">
					<AppBody />
					<AppFooter />
				</div>
			</div>
		);
	}
});