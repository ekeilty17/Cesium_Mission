
alert("hi");
var layer = viewer.scene.imageryLayers

function Maps_function() {

	if (viewer.infoBox.frame.contentDocument.getElementById('Maine').checked) {
		alert("Maine");
	
		var Maine = layers.addImageryProvider(new Cesium.TileMapServiceImageryProvider({
			url: 'http://gis.ccom.unh.edu:6080/arcgis/rest/services/GulfOfMaine/WGOM_HiBathy_Hill_4m/MapServer'
		}
	}

	//template
	/*
	if (viewer.infoBox.frame.contentDocument.getElementById('ID').checked) {
	
		var NAME = layers.addImageryProvider(new Cesium.TileMapServiceImageryProvider({
			url: ''
		}
	}
	*/

}