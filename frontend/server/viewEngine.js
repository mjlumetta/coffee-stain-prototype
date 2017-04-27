var React = require("react");
var ReactDOMServer = require("react-dom/server");
var path = require("path");

export default function(viewPath, options, callback) {
    var factory = React.createFactory(require(viewPath));
    callback(null, ReactDOMServer.renderToStaticMarkup(factory(options.props)));
}