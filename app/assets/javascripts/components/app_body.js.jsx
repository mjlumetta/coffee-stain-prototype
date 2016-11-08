var AppBody = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.signUp? <SignUp /> : null}
			</div>
		);
	}
});

AppBody.defaultProps = {
	signUp: false,
	editUser: true,
};