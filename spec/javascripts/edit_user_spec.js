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

	describe('Structure', function() {
		var divRowComponent, divRowNode, headerNode, divColNode, formNode, children;

		it('should have a row div at the top level', function() {
			divRowComponent = ReactTestUtils.scryRenderedDOMComponentsWithClass(
				editUserComponent, 'row')[0];
			expect(divRowComponent).toBeDefined();
			divRowNode = ReactDOM.findDOMNode(divRowComponent);
			expect(divRowNode.tagName.toLowerCase()).toBe('div');
		});

		it('should have a header and a col div as children', function() {
			children = divRowNode.children;
			expect(children.length).toBe(2);
			headerNode = children[0];
			divColNode = children[1];
		});

		it('should have a header', function() {
			expect(headerNode.tagName.toLowerCase()).toBe('h1');
			expect(headerNode.className).toMatch('page-heading');
			expect(headerNode.textContent).toBe('Edit User');
		});

		it('should have a col div', function() {
			expect(divColNode.tagName.toLowerCase()).toBe('div');
			expect(divColNode.className).toMatch('col-md-4 col-md-offset-4');
		});

		it('should have a form', function() {
			children = divColNode.children;
			expect(children.length).toBe(1);
			formNode = children[0];
			expect(formNode.tagName.toLowerCase()).toBe('form');
		});

		describe('Form structure', function() {
			var nameGroupNode, emailGroupNode, passwordGroupNode, passwordConfirmGroupNode,
				submitNode;

			it('should have all the expected form groups', function() {
				var index;
				children = formNode.children;
				expect(children.length).toBe(5);

				for (index = 0; index < 4; index++) {
					expect(children[index].tagName.toLowerCase()).toBe('div');
					expect(children[index].className).toMatch('form-group');
				}

				expect(children[4].tagName.toLowerCase()).toBe('div');
				expect(children[4].className).toMatch('row');

				nameGroupNode = children[0];
				emailGroupNode = children[1];
				passwordGroupNode = children[2];
				passwordConfirmGroupNode = children[3];
				submitNode = children[4];
			});

			it('should have a name field and label', function() {
				children = nameGroupNode.children;
				expect(children.length).toBe(2);
				expect(children[0].tagName.toLowerCase()).toBe('label');
				expect(children[0].textContent).toBe('Name');
				expect(children[1].tagName.toLowerCase()).toBe('input');
				expect(children[1].className).toMatch('form-control');
			});

			it('should have an email field and label', function() {
				children = emailGroupNode.children;
				expect(children.length).toBe(2);
				expect(children[0].tagName.toLowerCase()).toBe('label');
				expect(children[0].textContent).toBe('Email');
				expect(children[1].tagName.toLowerCase()).toBe('input');
				expect(children[1].className).toMatch('form-control');
			});

			it('should have a password field and label', function() {
				children = passwordGroupNode.children;
				expect(children.length).toBe(2);
				expect(children[0].tagName.toLowerCase()).toBe('label');
				expect(children[0].textContent).toBe('Password');
				expect(children[1].tagName.toLowerCase()).toBe('input');
				expect(children[1].className).toMatch('form-control');
				expect(children[1].getAttribute('type')).toBe('password');
			});

			it('should have a password confirmation field and label', function() {
				children = passwordConfirmGroupNode.children;
				expect(children.length).toBe(2);
				expect(children[0].tagName.toLowerCase()).toBe('label');
				expect(children[0].textContent).toBe('Password Confirmation');
				expect(children[1].tagName.toLowerCase()).toBe('input');
				expect(children[1].className).toMatch('form-control');
				expect(children[1].getAttribute('type')).toBe('password');
			});

			it('should have a submit button', function() {
				var buttonColNode, buttonNode;
				children = submitNode.children;
				expect(children.length).toBe(1);
				buttonColNode = children[0];
				expect(buttonColNode.tagName.toLowerCase()).toBe('div');
				expect(buttonColNode.className).toMatch('col-md-6 col-md-offset-3');

				children = buttonColNode.children;
				expect(children.length).toBe(1);
				buttonNode = children[0];
				expect(buttonNode.tagName.toLowerCase()).toBe('button');
				expect(buttonNode.className).toMatch('btn btn-primary');
				expect(buttonNode.textContent).toBe('Save Changes');
			});
		});
	});
});