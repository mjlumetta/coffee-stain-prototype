var ReactTestUtils = React.addons.TestUtils;

describe('AppFooter', function() {
	var appFooterElement, appFooterComponent;

	beforeAll(function() {
		appFooterElement = React.createElement(AppFooter);
	});

	it('should render', function() {
		expect(function() {
			appFooterComponent = ReactTestUtils.renderIntoDocument(
				appFooterElement);
		}).not.toThrow();
	});

	describe('Structure', function() {
		var footerNode, smallNode;

		it('should have a footer element at the top level', function() {
			var footerComponent = ReactTestUtils.findRenderedDOMComponentWithTag(
				appFooterComponent, 'footer');
			expect(footerComponent).toBeDefined();
			footerNode = ReactDOM.findDOMNode(footerComponent);
		});

		it('should have a small with copyright info', function() {
			var children = footerNode.children;
			expect(children.length).toBe(1);
			smallNode = children[0];
			expect(smallNode.tagName.toLowerCase()).toBe('small');
			expect(smallNode.textContent).toMatch('2016 by Mike Lumetta');
		});
	});
});