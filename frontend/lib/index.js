"use strict";

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require("./app/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_App2.default, React.createElement("div", { id: "appRoot", className: "app-root" }));