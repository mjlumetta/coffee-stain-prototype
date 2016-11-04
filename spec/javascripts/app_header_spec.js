var ReactTestUtils = React.addons.TestUtils;

describe('AppHeader', function() {
	var appHeaderElement, appHeaderComponent;

	beforeAll(function() {
		appHeaderElement = React.createElement(AppHeader);
	});

	it('should render', function() {
		expect(function() {
			appHeaderComponent = ReactTestUtils.renderIntoDocument(appHeaderElement);
		}).not.toThrow();
	});

	describe('Structure', function() {
		var headerNode, divContainerNode, navNode, ulNode, children;

		it('should have a header at the top level', function() {
			var headerComponent = ReactTestUtils.findRenderedDOMComponentWithTag(
				appHeaderComponent, 'header');
			expect(headerComponent).toBeDefined();
			headerNode = ReactDOM.findDOMNode(headerComponent);
			expect(headerNode.className).toMatch('navbar navbar-fixed-top navbar-inverse');
		});

		it('should have a container div', function() {
			children = headerNode.children;
			expect(children.length).toBe(1);
			divContainerNode = children[0];
			expect(divContainerNode.tagName.toLowerCase()).toBe('div');
			expect(divContainerNode.className).toMatch('container');
		});

		it('should have a nav', function() {
			children = divContainerNode.children;
			expect(children.length).toBe(1);
			navNode = children[0];
			expect(navNode.tagName.toLowerCase()).toBe('nav');
		});

		it('should have an unordered list', function() {
			children = navNode.children;
			expect(children.length).toBe(1);
			ulNode = children[0];
			expect(ulNode.tagName.toLowerCase()).toBe('ul');
			expect(ulNode.className).toMatch('nav navbar-nav navbar-right');
		});
	});
});