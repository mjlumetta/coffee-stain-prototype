var ReactTestUtils = React.addons.TestUtils;

describe('EditUser', function() {
	var editUserElement, editUserComponent;

	beforeAll(function() {
		editUserElement = React.createElement(EditUser);
	});

	it('should render', function() {
		expect(function() {
			editUserComponent = ReactTestUtils.renderIntoDocument(editUserElement);
		}).not.toThrow();
	});
});