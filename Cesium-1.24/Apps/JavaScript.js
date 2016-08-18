//defining some variables
var handler2;

//for Lines
var UserLines = [];

//for Polylines
var UserPolyLines = [];
// CAUTION: Only disable iframe sandbox if the descriptions come from a trusted source
//This is to allow buttons to be accessed while inside the info box, otherwise when you press them nothing will happen
viewer.infoBox.frame.setAttribute('sandbox', 'allow-same-origin allow-popups allow-forms allow-scripts allow-top-navigation');


//These are functions for buttons that are within what Cesium calls the "Info Box"


//This will be the button inside the Info box generated by the 'Edit Way Point' button

// Since the viewer is newly constructed, the iframe is still about:blank.
// This listens for the iframe to change to the Cesium description template,
// which only happens once at startup.
viewer.infoBox.frame.addEventListener('load', function() {
    // Now that the description is loaded, register a click listener inside
    // the document of the iframe.
    viewer.infoBox.frame.contentDocument.body.addEventListener('click', function(e) {
        // The document body will be rewritten when the selectedEntity changes,
        // but this body listener will survive.  Now it must determine if it was
        // one of the clickable buttons.

	if (e.target && e.target.className === 'Editing_Point') {
            	//alert("Editing Point");
		
		var selected_point = viewer.selectedEntity;

		var LatValue = viewer.infoBox.frame.contentDocument.getElementsByName("Latitude")[0].value;

			var point = viewer.entities.add({
        }
    }, false);
}, false);

    viewer.infoBox.frame.contentDocument.body.addEventListener('click', function(e) {
	
	if (e.target && e.target.className === 'swap_start_end_line') {
		alert("Swap Line");
	} else if (e.target && e.target.className === 'Making_Line') {
            //alert("Making Line");
            
            var selected_point = viewer.selectedEntity;
            
            var StartLat = viewer.infoBox.frame.contentDocument.getElementsByName("S-Latitude")[0].value;
		
		 //Updating its value in the array
		 var selected_point_number = parseInt(selected_point.name.replace(/[^\d.]/g, ''));
		 UserLat[selected_point_number-1] = StartLat;
		 UserLat[selected_point_number-1] = StartLong;
		 
		 //The end point doesn't get added to the UserLat and UserLong array, 
		 //because then it would screw up the position off all subsequent points
		 //This is why we have a separate array for lines, so we can include the end points
		 //So 'Line 1' could contain 'Point 4' and 'End Point 4', but it is stored as 'Line 1'
		 
		 var numLines = UserLines.length;

	}
    }, false);
}, false);

    viewer.infoBox.frame.contentDocument.body.addEventListener('click', function(e) {
	
	if (e.target && e.target.className === 'swap_start_end_Lawn_Mower') {
		alert("Swap Lawn Mower");
	} else if (e.target && e.target.className === 'Making_Lawn_Mower') {
            
            var selected_point = viewer.selectedEntity;

            var StartLat = viewer.infoBox.frame.contentDocument.getElementsByName("S-Latitude")[0].value;
            //a lot of this code is the same as in the 'Making_line' button
		 //updating the Starting point incase it was changed
		 //Updating the points array for the initial point
		 var selected_point_number = parseInt(selected_point.name.replace(/[^\d.]/g, '')); 
		 UserLat[selected_point_number-1] = StartLat;
		 UserLon[selected_point_number-1] = StartLong;

		 //again, we aren't going to add every point the Lawn Mower function creates to the points array,
		 //only the initial point
		 //We will add the remaining points to the UserPolylines array;
		 //Similar to how we keep track of lines, 'Polyline 1' could contain 'Point 6' as its starting point
		 //getting the points for the polyline
		 var numPolylines = UserPolylines.length;

	}
    }, false);
}, false);
//This will be for buttons that are pressed in selected entities
// |		  |
// |		  |
// |		  |
// |    Break    |
// |		  |
// |		  |
//the commented out alerts are just to test to see if pressing the buttons work
//and it removes all functionality acquired by the other buttons
	//alert("Select");
	//This stuff just gets rid of all the things the other buttons do
	if (handler2 != undefined) {
	
}
	//alert("Create");
	if (handler != undefined) {
	if (handler2 != undefined) {
	
	//getLatLong_Points() is in the Functions.js file, near the bottom
}
	//alert("Edit");
	if (handler != undefined) {
	if (handler2 != undefined) {
	
		<div><button class="Editing_Point">Update</button></div>'
}
//the points are connected in the order they were created in
	//alert("Polygon");
	if (handler != undefined) {
	if (handler2 != undefined) {
	
	var polygon;
		var combinedLatLong = [];
		for (var i=0; i < UserLat.length; i++) {
			combinedLatLong.push(UserLon[i], UserLat[i]);
		}
		
}
//There are 6 input boxes, but only 4 needs to be filled in and it will calculate the remaining 2
    //alert("Lines");
    if (handler != undefined) {
    if (handler2 != undefined) {

}
//It works the same as the 'Lines' button, with an additional 3 fields, of which only 2 need to be filled in
    //alert("Lawn Mower");
    if (handler != undefined) {

	 //There is a series of if else statements that put lat/long data in the text fields
	    //WARNING: I haven't figured out why, but bugs occur when you use the .toFix() function to round the decimals




//The 'Move' button allows you to move either a selected point or polyline created by the 'Lawn Mower' button
//Adding moving a line created by the 'Lines' button could be added later
function Move_function() {
    //alert("Move");
    var dragging;
}
    //alert("Delete");
    if (handler != undefined) {
}
    //alert("Delete All");
    if (handler != undefined) {
}
    //alert("Export");
    if (handler != undefined) {
}