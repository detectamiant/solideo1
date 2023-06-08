var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Solideo1_1 = new ol.format.GeoJSON();
var features_Solideo1_1 = format_Solideo1_1.readFeatures(json_Solideo1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solideo1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solideo1_1.addFeatures(features_Solideo1_1);
var lyr_Solideo1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solideo1_1, 
                style: style_Solideo1_1,
                interactive: true,
                title: '<img src="styles/legend/Solideo1_1.png" /> Solideo 1'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Solideo1_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Solideo1_1];
lyr_Solideo1_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', 'área': 'área', 'layer': 'layer', 'path': 'path', });
lyr_Solideo1_1.set('fieldImages', {'fid': 'Range', 'id': 'TextEdit', 'area': 'TextEdit', 'área': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Solideo1_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', 'área': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Solideo1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});