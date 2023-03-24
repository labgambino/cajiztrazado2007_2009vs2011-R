var wms_layers = [];

var lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ideandalucia.es/wms/ortofoto2016",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofotografia_2016_rgb",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofografia de Andalucía 2016 Color RGB (0.50m Pixel / 0.25m Pixel)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0, 0]);

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.300000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Catastro_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?SRS%3DEPS%0AG:23029%26bbox%3D511950,4662900,512150,4663100%26width%3D756%26heig%0Aht%3D756%26transparent%3DNo%26layers%3Dcatastro",
    attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Catastro",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_2, 0]);
var lyr_ToponmiadelosNucleosdePoblacin_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ideandalucia.es/wms/dea100_toponimia",
    attributions: ' ',
                              params: {
                                "LAYERS": "Toponimia_nucleos_poblacion",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Toponímia  de los Nucleos de Población",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ToponmiadelosNucleosdePoblacin_3, 0]);
var lyr_ToponmiaHidrogrfica_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ideandalucia.es/wms/dea100_toponimia",
    attributions: ' ',
                              params: {
                                "LAYERS": "Toponimia_hidrografia",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Toponímia Hidrográfica",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ToponmiaHidrogrfica_4, 0]);
var format_ejejunio2008ETRS89RESentities_5 = new ol.format.GeoJSON();
var features_ejejunio2008ETRS89RESentities_5 = format_ejejunio2008ETRS89RESentities_5.readFeatures(json_ejejunio2008ETRS89RESentities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ejejunio2008ETRS89RESentities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejejunio2008ETRS89RESentities_5.addFeatures(features_ejejunio2008ETRS89RESentities_5);
var lyr_ejejunio2008ETRS89RESentities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejejunio2008ETRS89RESentities_5, 
                style: style_ejejunio2008ETRS89RESentities_5,
                interactive: true,
                title: '<img src="styles/legend/ejejunio2008ETRS89RESentities_5.png" /> ejejunio2008ETRS89 RES entities'
            });
var format_ejejunio2008ETRS89RESentities_6 = new ol.format.GeoJSON();
var features_ejejunio2008ETRS89RESentities_6 = format_ejejunio2008ETRS89RESentities_6.readFeatures(json_ejejunio2008ETRS89RESentities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ejejunio2008ETRS89RESentities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejejunio2008ETRS89RESentities_6.addFeatures(features_ejejunio2008ETRS89RESentities_6);
var lyr_ejejunio2008ETRS89RESentities_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejejunio2008ETRS89RESentities_6, 
                style: style_ejejunio2008ETRS89RESentities_6,
                interactive: true,
                title: '<img src="styles/legend/ejejunio2008ETRS89RESentities_6.png" /> ejejunio2008ETRS89 RES entities'
            });
var format_ejemayo2011seg30032009ETRS89RESentities_7 = new ol.format.GeoJSON();
var features_ejemayo2011seg30032009ETRS89RESentities_7 = format_ejemayo2011seg30032009ETRS89RESentities_7.readFeatures(json_ejemayo2011seg30032009ETRS89RESentities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ejemayo2011seg30032009ETRS89RESentities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejemayo2011seg30032009ETRS89RESentities_7.addFeatures(features_ejemayo2011seg30032009ETRS89RESentities_7);
var lyr_ejemayo2011seg30032009ETRS89RESentities_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejemayo2011seg30032009ETRS89RESentities_7, 
                style: style_ejemayo2011seg30032009ETRS89RESentities_7,
                interactive: true,
                title: '<img src="styles/legend/ejemayo2011seg30032009ETRS89RESentities_7.png" /> ejemayo2011seg30032009ETRS89 RES entities'
            });
var format_ejemayo2011seg30032009ETRS89RESentities_8 = new ol.format.GeoJSON();
var features_ejemayo2011seg30032009ETRS89RESentities_8 = format_ejemayo2011seg30032009ETRS89RESentities_8.readFeatures(json_ejemayo2011seg30032009ETRS89RESentities_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ejemayo2011seg30032009ETRS89RESentities_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejemayo2011seg30032009ETRS89RESentities_8.addFeatures(features_ejemayo2011seg30032009ETRS89RESentities_8);
var lyr_ejemayo2011seg30032009ETRS89RESentities_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejemayo2011seg30032009ETRS89RESentities_8, 
                style: style_ejemayo2011seg30032009ETRS89RESentities_8,
                interactive: true,
                title: '<img src="styles/legend/ejemayo2011seg30032009ETRS89RESentities_8.png" /> ejemayo2011seg30032009ETRS89 RES entities'
            });

lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Catastro_2.setVisible(true);lyr_ToponmiadelosNucleosdePoblacin_3.setVisible(true);lyr_ToponmiaHidrogrfica_4.setVisible(true);lyr_ejejunio2008ETRS89RESentities_5.setVisible(true);lyr_ejejunio2008ETRS89RESentities_6.setVisible(true);lyr_ejemayo2011seg30032009ETRS89RESentities_7.setVisible(true);lyr_ejemayo2011seg30032009ETRS89RESentities_8.setVisible(true);
var layersList = [lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0,lyr_OpenStreetMap_1,lyr_Catastro_2,lyr_ToponmiadelosNucleosdePoblacin_3,lyr_ToponmiaHidrogrfica_4,lyr_ejejunio2008ETRS89RESentities_5,lyr_ejejunio2008ETRS89RESentities_6,lyr_ejemayo2011seg30032009ETRS89RESentities_7,lyr_ejemayo2011seg30032009ETRS89RESentities_8];
lyr_ejejunio2008ETRS89RESentities_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejejunio2008ETRS89RESentities_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejemayo2011seg30032009ETRS89RESentities_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejemayo2011seg30032009ETRS89RESentities_8.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejejunio2008ETRS89RESentities_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ejejunio2008ETRS89RESentities_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ejemayo2011seg30032009ETRS89RESentities_7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ejemayo2011seg30032009ETRS89RESentities_8.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ejejunio2008ETRS89RESentities_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejejunio2008ETRS89RESentities_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejemayo2011seg30032009ETRS89RESentities_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejemayo2011seg30032009ETRS89RESentities_8.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejemayo2011seg30032009ETRS89RESentities_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});