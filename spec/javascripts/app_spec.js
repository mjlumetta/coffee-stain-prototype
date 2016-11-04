var ReactTestUtils = React.addons.TestUtils;

describe('App', function() {
	var appElement, appComponent;

	beforeAll(function() {
		appElement = React.createElement(App);
	});

	it('should render', function() {
		expect(function() {
			appComponent = ReactTestUtils.renderIntoDocument(appElement);
		}).not.toThrow();
	})
})