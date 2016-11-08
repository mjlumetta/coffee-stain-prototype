var EditUser = React.createClass({
	render: function() {
		return (
			<div className="row">
				<h1 className="page-heading">Edit User</h1>
				<div className="col-md-4 col-md-offset-4">
					<form>
						<div className="form-group">
							<label htmlFor="nameField">Name</label>
							<input id="nameField" type="text" className="form-control" />
						</div>

						<div className="form-group">
							<label htmlFor="emailField">Email</label>
							<input id="emailField" type="email" className="form-control" />
						</div>

						<div className="form-group">
							<label htmlFor="passwordField">Password</label>
							<input id="passwordField" type="password" className="form-control" />
						</div>

						<div className="form-group">
							<label htmlFor="passwordConfirmField">Password Confirmation</label>
							<input id="passwordConfirmField" type="password" className="form-control" />
						</div>

						<div className="row">
							<div className="col-md-6 col-md-offset-3">
								<button className="btn btn-primary full-width">
									Save Changes
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
});