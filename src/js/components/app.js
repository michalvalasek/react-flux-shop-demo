/** @jsx React.DOM */

var React = require('react');
var Catalog = require('./catalog/app-catalog.js');
var CatalogDetail = require('./product/app-catalogdetail.js');
var Cart = require('./cart/app-cart.js');
var Template = require('./app-template.js');
var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;

var APP = React.createClass({
  render: function() {
    return (
      <Template>
        <Locations>
          <Location path="/" handler={Catalog} />
          <Location path="/cart" handler={Cart} />
          <Location path="/item/:item" handler={CatalogDetail} />
        </Locations>
      </Template>
    )
  }
});

module.exports = APP;
