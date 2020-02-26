var SVGLib = {

    /* createLinearGradient Sample
    createLinearGradient($('svg')[0],'GradientName',[
      {offset:'5%', 'stop-color':'#f60', 'stop-opacity':0.5},
      {offset:'95%','stop-color':'#ff6', 'stop-opacity':1}
    ]);
    $('#ElementID').attr('fill','url(#GradientName)');

    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    */
    createLinearGradient: function (svg, id, x1, y1, x2, y2, stops) {
    //createLinearGradient: function (svg, id, stops) {
        var grad = document.createElementNS("http://www.w3.org/2000/svg", 'linearGradient');
        grad.setAttribute('id', id);
        grad.setAttribute('x1', x1);
        grad.setAttribute('y1', y1);
        grad.setAttribute('x2', x2);
        grad.setAttribute('y2', y2);

        for (var i = 0; i < stops.length; i++) {
            var attrs = stops[i];
            var stop = document.createElementNS("http://www.w3.org/2000/svg", 'stop');
            for (var attr in attrs) {
                if (attrs.hasOwnProperty(attr)) stop.setAttribute(attr, attrs[attr]);
            }
            grad.appendChild(stop);
        }

        var defs = svg.insertBefore(document.createElementNS("http://www.w3.org/2000/svg", 'defs'), svg.firstChild);
        return svg.appendChild(grad);
    },

    /* createGradientGradient Sample
    createGradientGradient($('svg')[0],'GradientName',[
      {offset:'5%', 'stop-color':'rgb(123,125,222)', 'stop-opacity':0.5},
      {offset:'95%','stop-color':'#ff6', 'stop-opacity':1}
    ]);
    $('#ElementID').attr('fill','url(#GradientName)');

    <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
    */
    createGradientGradient: function (svg, id, cx, cy, r, stops) {
        var grad = document.createElementNS("http://www.w3.org/2000/svg", 'radialGradient');
        grad.setAttribute('id', id);
        grad.setAttribute('cx', cx);
        grad.setAttribute('cy', cy);
        grad.setAttribute('r', r);

        for (var i = 0; i < stops.length; i++) {
            var attrs = stops[i];
            var stop = document.createElementNS("http://www.w3.org/2000/svg", 'stop');
            for (var attr in attrs) {
                if (attrs.hasOwnProperty(attr)) stop.setAttribute(attr, attrs[attr]);
            }
            grad.appendChild(stop);
        }

        var defs = svg.insertBefore(document.createElementNS("http://www.w3.org/2000/svg", 'defs'), svg.firstChild);
        return defs.appendChild(grad);
    },

    /*SVGLib.createText('', '0', '6', '16', 'middle', 'white', 'bold', 'P')*/
    createText: function (id, x, y, size, anchor, color, weight, content) {
        var vText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        if (id != '') vText.id = id;
        vText.setAttribute('x', x);
        vText.setAttribute('y', y);
        vText.setAttribute('font-family', 'Arial,sans-serif, Microsoft JhengHei');
        vText.setAttribute('font-size', size);
        vText.setAttribute('text-anchor', anchor);
        vText.setAttribute('fill', color);
        vText.setAttribute('font-weight', weight);
        vText.setAttribute('pointer-events', 'none');
        vText.textContent = content;
        return vText;
    },

    /*SVGLib.createRect('', 'x', 'y', 'w', 'h', 'rx', 'ry', '#46BFBD', '', '')*/
    createRect: function (id, x, y, w, h, rx, ry, fill, stroke, strokeWidth) {
        var vRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        if (id != '') vRect.id = id;
        vRect.setAttribute("x", x);
        vRect.setAttribute("y", y);
        vRect.setAttribute("width", w);
        vRect.setAttribute("height", h);
        vRect.setAttribute("rx", rx);
        vRect.setAttribute("ry", ry);
        vRect.setAttribute("fill", fill);
        if (stroke != '') vRect.setAttribute("stroke", stroke);
        if (strokeWidth != '') vRect.setAttribute("stroke-width", strokeWidth);
        vRect.setAttribute("stroke-linecap", 'round');
        vRect.setAttribute("stroke-linejoin", 'round');
        return vRect;
    },

    /*SVGLib.createRectWithAlpha('', 'x', 'y', 'w', 'h', 'rx', 'ry', '#46BFBD','0.5' , '', '')*/
    createRectWithAlpha: function (id, x, y, w, h, rx, ry, fill, alpha, stroke, strokeWidth) {
        var vRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        if (id != '') vRect.id = id;
        vRect.setAttribute("x", x);
        vRect.setAttribute("y", y);
        vRect.setAttribute("width", w);
        vRect.setAttribute("height", h);
        vRect.setAttribute("rx", rx);
        vRect.setAttribute("ry", ry);
        vRect.setAttribute("fill", fill);
        vRect.setAttribute("fill-opacity", alpha);
        if (stroke != '') vRect.setAttribute("stroke", stroke);
        if (strokeWidth != '') vRect.setAttribute("stroke-width", strokeWidth);
        vRect.setAttribute("stroke-linecap", 'round');
        vRect.setAttribute("stroke-linejoin", 'round');
        return vRect;
    },

    /*SVGLib.createCircle('', '0', '0', '12', 'blue')*/
    createCircle: function (id, cx, cy, r, fill) {
        var vCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        if (id != '') vCircle.id = id;
        vCircle.setAttribute('cx', cx);
        vCircle.setAttribute('cy', cy);
        vCircle.setAttribute('r', r);
        vCircle.setAttribute('fill', fill);
        return vCircle;
    },

    /*SVGLib.createCircleWithStroke('', '0', '0', '12', 'blue', 'stroke', 'strokeWidth')*/
    createCircleWithStroke: function (id, cx, cy, r, fill, stroke, strokeWidth) {
        var vCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        if (id != '') vCircle.id = id;
        vCircle.setAttribute('cx', cx);
        vCircle.setAttribute('cy', cy);
        vCircle.setAttribute('r', r);
        vCircle.setAttribute('fill', fill);
        vCircle.setAttribute("stroke", stroke);
        vCircle.setAttribute("stroke-width", strokeWidth);
        return vCircle;
    },

    /*SVGLib.createLine('','0','0','100','0','black','1')*/
    createLine: function(id,x1,y1,x2,y2, color, width){
        var vLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        if (id !== '') vLine.id = id;
        vLine.setAttribute('x1', x1);
        vLine.setAttribute('y1', y1);
        vLine.setAttribute('x2', x2);
        vLine.setAttribute('y2', y2);
        vLine.setAttribute('stroke', color);
        vLine.setAttribute('stroke-width', width);
        vLine.setAttribute("stroke-linecap", 'round');
        vLine.setAttribute("stroke-linejoin", 'round');
        return vLine;
    },

    /*SVGLib.createGroup('id','0','38','pointer')*/
    //  [ auto | crosshair | default | pointer | move | e-resize | 
    // ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize| text | wait | help ]] 
    createGroup: function (id, x, y, point_type){
        var vGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        if (id !== '') vGroup.id = id;
        vGroup.setAttribute('transform', 'translate('+ x +','+ y+')');
        vGroup.setAttribute('cursor', point_type);
        return vGroup;
    },

    /*SVGLib.createForeignObject('id','0','0','100%', '100%')*/
    createForeignObject: function (id, x, y, w, h){
        var svgForns = document.createElementNS('http://www.w3.org/2000/svg', "foreignObject");
        if (id !== '') svgForns.id = id;
        svgForns.setAttribute('x', x);
        svgForns.setAttribute('y', y);
        svgForns.setAttribute('width', w);
        svgForns.setAttribute('height', h);
        return svgForns;
    },

    _polarToCartesian: function (centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX*1.0 + radius * Math.cos(angleInRadians),
            y: centerY*1.0 + radius * Math.sin(angleInRadians)
        };
    },

    _describeArc: function (x, y, radius, startAngle, endAngle) {
        var start =this._polarToCartesian(x, y, radius, endAngle);
        var end = this._polarToCartesian(x, y, radius, startAngle);
        var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

        var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, arcSweep, 0, end.x, end.y
        ].join(" ");

        return d;
    },
    
    /*SVGLib.createArcPath('', 'none', 'black', '5', '120.58', '127.13', '100', '-100', '0')*/
    createArcPath: function (id, fill, stroke, strokeWidth, cx, cy, r, start, end){
        var vArcPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        if (id !== '') vArcPath.id = id;
        vArcPath.setAttribute('fill', fill);
        vArcPath.setAttribute('stroke', stroke);
        vArcPath.setAttribute('stroke-width', strokeWidth);
        vArcPath.setAttribute('d', this._describeArc(cx, cy, r, start, end));
        return vArcPath;
    },

    updateArcPath: function (id, cx, cy, r, start, end) {
        //console.info(id + " " + cx + " " + cy + " " + r + " " + start + " " + end);
        var arc = document.getElementById(id);
        arc.setAttribute('d', this._describeArc(cx, cy, r, start, end));
    },

    /*SVGLib.createPath('', 'fill', 'stroke', 'strokeWidth', 'd')*/
    createPath: function (id, fill, stroke, strokeWidth, d, opacity){
        var vPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        if (id !== '') vPath.id = id;
        vPath.setAttribute('fill', fill);
        if (opacity !== '' || id !== 'undefined') vPath.setAttribute('fill-opacity', opacity);
        vPath.setAttribute('stroke', stroke);
        vPath.setAttribute('stroke-width', strokeWidth);
        vPath.setAttribute('d', d);
        return vPath;
    },

    createCircilePath: function (centerX, centerY, doughnutRadius, cutoutRadius, value){
        var startRadius = -Math.PI / 2; //-90 degree
        var segmentTotal = 100;
        var segmentAngle =  ((value / segmentTotal * 1.0) * (Math.PI * 2));
        var endRadius = startRadius + segmentAngle;
        //console.info("value="+ value);
        //console.info("startRadius=" + startRadius * 180 / Math.PI);
        //console.info("endRadius=" + endRadius * 180 / Math.PI);
        //console.info(Math.floor(Math.sin(startRadius) * doughnutRadius));

        if (endRadius * 180 / Math.PI >= 270) endRadius = (270 - 0.5) * 1.0 / 180 * Math.PI
         largeArc = ((endRadius - startRadius) % (Math.PI * 2)) >= Math.PI ? 1 : 0,
                startX = centerX + Math.cos(startRadius) * doughnutRadius,
                startY = centerY + Math.sin(startRadius) * doughnutRadius,
                endX2 = centerX + Math.cos(startRadius) * cutoutRadius,
                endY2 = centerY +Math.sin(startRadius) * cutoutRadius,
                endX = centerX + Math.cos(endRadius) * doughnutRadius,
                endY = centerY +Math.sin(endRadius) * doughnutRadius,
                startX2 = centerX + Math.cos(endRadius) * cutoutRadius,
                startY2 = centerY + Math.sin(endRadius) * cutoutRadius;
        //console.info("startA, endA, segmentAngle=" + startRadius * 180 / Math.PI + ", " + endRadius * 180 / Math.PI + ", " + segmentAngle * 180 / Math.PI);

        var cmd = [
            'M', startX, startY,//Move pointer
            'A', doughnutRadius, doughnutRadius, 0, largeArc, 1, endX, endY,//Draw outer arc path
            'L', startX2, startY2,//Draw line path(this line connects outer and innner arc paths)
            'A', cutoutRadius, cutoutRadius, 0, largeArc, 0, endX2, endY2,//Draw inner arc path
            'Z'//Cloth path
        ];

        return cmd.join(' ');
    },

    createCircilePath2: function (centerX, centerY, doughnutRadius, cutoutRadius, ofsvalue, value){
        var startRadius = -Math.PI / 2; //-90 degree
        var segmentTotal = 100;
        
        var segmentAngle1 =  ((ofsvalue / segmentTotal * 1.0) * (Math.PI * 2));
        var endRadius1 = startRadius + segmentAngle1;
        
        var segmentAngle2 =  ((value / segmentTotal * 1.0) * (Math.PI * 2));
        var endRadius2 = endRadius1 + segmentAngle2;
        //console.info("value="+ value);
        //console.info("startRadius=" + startRadius * 180 / Math.PI);
        //console.info("endRadius=" + endRadius * 180 / Math.PI);
        //console.info(Math.floor(Math.sin(startRadius) * doughnutRadius));
        
        //if (endRadius1 * 180 / Math.PI >= 270) endRadius1 = (270 - 0.5) * 1.0 / 180 * Math.PI;
        if (endRadius2 * 180 / Math.PI >= 270) endRadius2 = (270 - 0.5) * 1.0 / 180 * Math.PI;
         largeArc = ((endRadius2 - endRadius1) % (Math.PI * 2)) >= Math.PI ? 1 : 0,
                startX = centerX + Math.cos(endRadius1) * doughnutRadius,
                startY = centerY + Math.sin(endRadius1) * doughnutRadius,
                endX2 = centerX + Math.cos(endRadius1) * cutoutRadius,
                endY2 = centerY +Math.sin(endRadius1) * cutoutRadius,
                endX = centerX + Math.cos(endRadius2) * doughnutRadius,
                endY = centerY +Math.sin(endRadius2) * doughnutRadius,
                startX2 = centerX + Math.cos(endRadius2) * cutoutRadius,
                startY2 = centerY + Math.sin(endRadius2) * cutoutRadius;
        //console.info("startA, endA, segmentAngle=" + startRadius * 180 / Math.PI + ", " + endRadius * 180 / Math.PI + ", " + segmentAngle * 180 / Math.PI);

        var cmd = [
            'M', startX, startY,//Move pointer
            'A', doughnutRadius, doughnutRadius, 0, largeArc, 1, endX, endY,//Draw outer arc path
            'L', startX2, startY2,//Draw line path(this line connects outer and innner arc paths)
            'A', cutoutRadius, cutoutRadius, 0, largeArc, 0, endX2, endY2,//Draw inner arc path
            'Z'//Cloth path
        ];

        return cmd.join(' ');
    },
    
    
    /*SVGLib.createPolyline('', 'fill', '117.5,119.9 115.9,110.7 125.2,110.7 123.9,119.9 122.6,140.3 120.7,143.5 118.4,139.6')*/
    createPolyline: function (id, fill, points){
        var vPolyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        if (id !== '') vPolyline.id = id;
        vPolyline.setAttribute('fill', fill);
        vPolyline.setAttribute('points', points);
        return vPolyline;
    },
    createPolylineWithStroke: function (id, fill, points, stroke, strokeWidth) {
        var vPolyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        if (id !== '') vPolyline.id = id;
        vPolyline.setAttribute('fill', fill);
        vPolyline.setAttribute('points', points);
        vPolyline.setAttribute('stroke', stroke);
        vPolyline.setAttribute('stroke-width', strokeWidth);
        return vPolyline;
    },

    //x: x-coordinate
    //y: y-coordinate
    //w: width
    //h: height
    //r: corner radius
    //tl: top_left rounded?
    //tr: top_right rounded?
    //bl: bottom_left rounded?
    //br: bottom_right rounded?
    /* SVGLib.createRoundedRect('0','0','200','100','8',false,false,true,true)*/
    createRoundedRect: function (x, y, w, h, r, tl, tr, bl, br) {
        var retval;
        retval = "M" + (x + r) + "," + y;
        retval += "h" + (w - 2*r);
        if (tr) { retval += "a" + r + "," + r + " 0 0 1 " + r + "," + r; }
        else { retval += "h" + r; retval += "v" + r; }
        retval += "v" + (h - 2*r);
        if (br) { retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + r; }
        else { retval += "v" + r; retval += "h" + -r; }
        retval += "h" + (2*r - w);
        if (bl) { retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + -r; }
        else { retval += "h" + -r; retval += "v" + -r; }
        retval += "v" + (2*r - h);
        if (tl) { retval += "a" + r + "," + r + " 0 0 1 " + r + "," + -r; }
        else { retval += "v" + -r; retval += "h" + r; }
        retval += "z";
        return retval;
    },

    /*<image xlink:href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>*/
    createImage : function (id, x, y, w, h, src){
        var vImg = document.createElementNS('http://www.w3.org/2000/svg', 'image');    
        if (id !== '')  vImg.setAttributeNS(null, 'id', id);
        vImg.setAttributeNS(null, 'x', x);
        vImg.setAttributeNS(null, 'y', y);
        vImg.setAttributeNS(null, 'width', w);
        vImg.setAttributeNS(null, 'height', h);
        vImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', src);
        return vImg;
    }
};
