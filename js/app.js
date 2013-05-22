
/*jslint white: false, onevar: true, browser: true, devel: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, strict: false, newcap: true, immed: true */
/*global jQuery, $, Raphael */

var width           =   86400,
    height          =   100,
    visible_width   =   500,
    scale_seconds   =   60,
    steps           =   width/scale_seconds,
    day_in_seconds  =   86400
    ticks           =   [];

var move = function(dx, dy) {
    todayset.attr({
        x: this.ox + dx,
    });
}

var start = function() {
    todayset.ox = this.attr('x');
}

var end = function() {}

var paper = Raphael(0,0,visible_width,100);

var today = paper.rect((width - visible_width) * -1, 0, width, height);
today.attr({
    fill: '#dddddd',
    opacity: 0.5,
    stroke: ''
});
today.toBack();


var todayset = paper.set();
 
//todayset.push(today);

for(var i=0; i < steps ; i++) {
    ticks[i] = paper.rect(width - (scale_seconds * i), 25, 3, 50);
    ticks[i].attr({
        fill: '#0000ff',
        stroke: ''
    });
    ticks[i].toFront();
    todayset.push(ticks[i]);
}

todayset.drag(move, start, end);

jQuery(function () {

});


