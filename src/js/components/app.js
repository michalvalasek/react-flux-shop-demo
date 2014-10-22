/** @jsx React.DOM */

var React = require('react');
var Catalog = require('../components/app-catalog.js');
var Cart = require('../components/app-cart.js');

var APP = React.createClass({
  handleClick: function(){
    AppActions.addItem('this is the item');
  },
  render: function() {
    return (
      <div>
        <h1>Go Shopping!</h1>
        <Catalog />
        <h1>Cart</h1>
        <Cart />
      </div>
    );
  }
});

module.exports = APP;