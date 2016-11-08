var ReactTestUtils = React.addons.TestUtils;

describe('AppBody', function() {
	var appBodyElement, appBodyComponent;

	beforeAll(function() {
		appBodyElement = React.createElement(AppBody);
	});

	it('should render', function() {
		expect(function() {
			appBodyComponent = ReactTestUtils.renderIntoDocument(appBodyElement);
		}).not.toThrow();
	});
});