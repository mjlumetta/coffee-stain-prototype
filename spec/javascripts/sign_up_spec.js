var ReactTestUtils = React.addons.TestUtils; 

describe('SignUp', function() {
	var signUpElement, signUpComponent;

	beforeAll(function() {
		signUpElement = React.createElement(SignUp);
	});

	it('should render', function() {
		expect(function() {
			signUpComponent = ReactTestUtils.renderIntoDocument(signUpElement);
		}).not.toThrow();
	});

	describe('Structure', function() {
		var divRowComponent, divRowNode, headerNode, divColNode, formNode, children;

		it('should have a row div at the top level', function() {
			divRowComponent = ReactTestUtils.scryRenderedDOMComponentsWithClass(
				signUpComponent, 'row')[0];
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
			expect(headerNode.textContent).toBe('Sign Up');
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
				checkboxNode, submitNode;

			it('should have all the expected form groups', function() {
				var i;
				children = formNode.children;
				expect(children.length).toBe(6);
				for (i = 0; i < 4; i++) {
					expect(children[i].tagName.toLowerCase()).toBe('div');
					expect(children[i].className).toMatch('form-group');
				}

				expect(children[4].tagName.toLowerCase()).toBe('div');
				expect(children[4].className).toMatch('checkbox');

				expect(children[5].tagName.toLowerCase()).toBe('div');
				expect(children[5].className).toMatch('row');

				nameGroupNode = children[0];
				emailGroupNode = children[1];
				passwordGroupNode = children[2];
				passwordConfirmGroupNode = children[3];
				checkboxNode = children[4];
				submitNode = children[5];
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

			it('should have a checkbox for user agreement', function() {
				var labelNode, checkboxElementNode;
				children = checkboxNode.children;
				expect(children.length).toBe(1);
				labelNode = children[0];
				expect(labelNode.tagName.toLowerCase()).toBe('label');
				expect(labelNode.textContent).toMatch("I agree to Coffee Stain's user agreement.");

				children = labelNode.children;
				expect(children.length).toBe(1);
				checkboxElementNode = children[0];
				expect(checkboxElementNode.tagName.toLowerCase()).toBe('checkbox');
				expect(checkboxElementNode.className).toMatch('checkbox');
			});

			it('should have a submit button', function() {
				var btnColNode, btnNode;
				children = submitNode.children;
				expect(children.length).toBe(1);
				btnColNode = children[0];
				expect(btnColNode.tagName.toLowerCase()).toBe('div');
				expect(btnColNode.className).toMatch('col-md-6 col-md-offset-3');
				
				children = btnColNode.children;
				expect(children.length).toBe(1);
				btnNode = children[0];
				expect(btnNode.tagName.toLowerCase()).toBe('button');
				expect(btnNode.className).toMatch('btn btn-primary');
				expect(btnNode.textContent).toBe('Sign Up');
			});
		});
	});
});