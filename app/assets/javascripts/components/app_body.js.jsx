var AppBody = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.signUp? <SignUp /> : null}
				{this.props.editUser? <EditUser /> : null}
			</div>
		);
	}
});

AppBody.defaultProps = {
	signUp: false,
	editUser: true,
};