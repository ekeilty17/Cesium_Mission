var imageryLayers = viewer.imageryLayers;

function Maps_function() {
	//alert("Maps");

	var Maine;
	if (document.getElementById('Maine').checked) {
		//alert("Maine");
		Maine = imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
    			url : 'http://gis.ccom.unh.edu:6080/arcgis/rest/services/GulfOfMaine/WGOM_HiBathy_Hill_4m/MapServer'
		}));
		//add(Maine);
	} else if (!document.getElementById('Maine').checked) {
		//alert("not Maine");
		remove(Maine);
	}
}