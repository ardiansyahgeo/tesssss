var size = 0;
var placement = 'point';
function categories_POLARUANGRDTR2019_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Badan Air':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,219,242,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(65,105,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jalan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,30,30,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pemakaman':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(90,255,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perdagangan & Jasa Skala BWP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,130,130,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perdagangan & Jasa Skala Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,100,100,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perdagangan & Jasa Skala Sub-BWP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,130,130,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perkebunan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,175,55,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pertanian Tanaman Pangan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,245,70,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pos Lintas Batas Negara':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,55,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RTH Lainnya':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(80,195,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sentra Industri Kecil dan Menengah':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(97,180,205,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Kesehatan Skala Kecamatan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,50,155,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Kesehatan Skala RW':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,100,215,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Olahraga Skala RW':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,75,185,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Pendidikan Skala Kecamatan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,50,155,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Pendidikan Skala Kelurahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,75,185,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Pendidikan Skala Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,25,125,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Pendidikan Skala RW':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,100,215,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Peribadatan Skala Kecamatan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,50,155,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Peribadatan Skala Kelurahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,75,185,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Peribadatan Skala RW':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,100,215,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Sosial Budaya Skala Kelurahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,75,185,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Transportasi Skala Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,25,125,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sungai':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,219,242,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman Kecamatan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(70,135,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman Kelurahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(75,165,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(65,105,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zona Pariwisata':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,165,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zona Perkantoran':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,155,155,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zona Pertahanan dan Keamanan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,0,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zona Perumahan Kepadatan Rendah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,250,75,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zona Perumahan Kepadatan Sedang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,240,5,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zona Sekitar Danau atau Waduk':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,219,242,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zona Sempadan Sungai':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(85,225,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_POLARUANGRDTR2019_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Zona_3");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_POLARUANGRDTR2019_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
