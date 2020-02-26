# SVGLib
A svg library that can draw svg element easliy through javascript.


## Include the js file
```html
<script src="app/shared/CommonLib.js" type="text/javascript"></script>
```

## Using SVGLib
- **createText: function (id, x, y, size, anchor, color, weight, content)**
```javascript
    SVGLib.createText('', '0', '6', '16', 'middle', 'white', 'bold', 'P')
```
- **createRect: function (id, x, y, w, h, rx, ry, fill, stroke, strokeWidth)**
```javascript
    SVGLib.createRect('', 'x', 'y', 'w', 'h', 'rx', 'ry', '#46BFBD', '', '')
```
- **createRectWithAlpha: function (id, x, y, w, h, rx, ry, fill, alpha, stroke, strokeWidth)**
```javascript
    SVGLib.createRectWithAlpha('', 'x', 'y', 'w', 'h', 'rx', 'ry', '#46BFBD','0.5' , '', '')
```
- **createCircle: function (id, cx, cy, r, fill)**
- createCircleWithStroke: function (id, cx, cy, r, fill, stroke, strokeWidth)
```javascript
    SVGLib.createCircle('', '0', '0', '12', 'blue')
```
- **createLine: function(id,x1,y1,x2,y2, color, width)**
```javascript
    SVGLib.createLine('','0','0','100','0','black','1')
```
- **createGroup: function (id, x, y, point_type)**
```javascript
    SVGLib.createGroup('id','0','38','pointer')
```
    // point_type: [ auto | crosshair | default | pointer | move | e-resize 
    // | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize| text | wait | help ]
    
- **createArcPath: function (id, fill, stroke, strokeWidth, cx, cy, r, start, end)**
```javascript
    SVGLib.createArcPath('', 'none', 'black', '5', '120.58', '127.13', '100', '-100', '0')
```
- **createPath: function (id, fill, stroke, strokeWidth, d, opacity)**
```javascript
    SVGLib.createPath('', 'fill', 'stroke', 'strokeWidth', 'd')
```
- **createPolyline: function (id, fill, points)**
- createPolylineWithStroke: function (id, fill, points, stroke, strokeWidth)
```javascript
    SVGLib.createPolyline('', 'fill'
    , '117.5,119.9 115.9,110.7 125.2,110.7 123.9,119.9 122.6,140.3 120.7,143.5 118.4,139.6')
```
- **createRoundedRect: function (x, y, w, h, r, tl, tr, bl, br)**
```javascript
    //x: x-coordinate
    //y: y-coordinate
    //w: width
    //h: height
    //r: corner radius
    //tl: top_left rounded?
    //tr: top_right rounded?
    //bl: bottom_left rounded?
    //br: bottom_right rounded?
    SVGLib.createRoundedRect('0','0','200','100','8',false,false,true,true)
```
- createImage : function (id, x, y, w, h, src)
- createCircilePath: function (centerX, centerY, doughnutRadius, cutoutRadius, value)
- createLinearGradient: function (svg, id, x1, y1, x2, y2, stops)
- createGradientGradient: function (svg, id, cx, cy, r, stops)
- createForeignObject: function (id, x, y, w, h)


