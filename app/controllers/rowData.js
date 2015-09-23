
var args = arguments[0] || {};

var name = args.name;
var location = args.location;
$.name.text = name.title + " " +  name.first + " " + name.last;
$.location.text = location.city + ", " + location.state;