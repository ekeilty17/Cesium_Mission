//Coordinate conversions

//Degrees to UTM Function
function deg2utm(Lat, Lon) {
    var n1 = Lat.length;
    var n2 = Lon.length;
    
    if (n1 !== n2) {
        alert("Lat and Lon vectors should have the same length");
    }
    
    var sa = 6378137.000000;
    var sb = 6356752.314245;
    
    var e2 = ( Math.sqrt(((sa*sa) - (sb*sb))) ) / sb;
    var e2cuadrada = e2 * e2;
    var c = (sa*sa) / sb;
    
    
    var lat = [Lat[0] * Math.PI/180]; //converting to radians
    var lon = [Lon[0] * Math.PI/180]; //so they can be used in trig functions
    for (var i=1; i<Lat.length; i++) {
        lat.push(Lat[i] * Math.PI/180);
        lon.push(Lon[i] * Math.PI/180);
    }
    
    
    var Huso = [Math.floor( ( Lon[0] / 6 ) + 31)];
    var S = [( Huso[0] * 6 ) - 183];
    var deltaS = [lon[0] - S[0]*Math.PI/180];
    for (var i=1; i<Lon.length; i++) {
        Huso.push(Math.floor( ( Lon[i] / 6 ) + 31));
        S.push(( ( Huso[i] * 6 ) - 183 ));
        deltaS.push(lon[i] - S[i]*Math.PI/180) ;
    }
    
    
    var Letra;
    if (Lat[0] < -72) {
            Letra = 'C';
        } else if (Lat[0] < -64) {
            Letra = 'D';
        } else if (Lat[0] < -56) {
            Letra = 'E';
        } else if (Lat[0] < -48) {
            Letra = 'F';
        } else if (Lat[0] < -40) {
            Letra = 'G';
        } else if (Lat[0] < -32) {
            Letra = 'H';
        } else if (Lat[0] < -24) {
            Letra = 'J';
        } else if (Lat[0] < -16) {
            Letra = 'K';
        } else if (Lat[0] < -8) {
            Letra = 'L';
        } else if (Lat[0] < 0) {
            Letra = 'M';
        } else if (Lat[0] < 8) {
            Letra = 'N';
        } else if (Lat[0] < 16) {
            Letra = 'P';
        } else if (Lat[0] < 24) {
            Letra = 'Q';
        } else if (Lat[0] < 32) {
            Letra = 'R';
        } else if (Lat[0] < 40) {
            Letra = 'S';
        } else if (Lat[0] < 48) {
            Letra = 'T';
        } else if (Lat[0] < 56) {
            Letra = 'U';
        } else if (Lat[0] < 64) {
            Letra = 'V';
        } else if (Lat[0] < 72) {
            Letra = 'W';
        }else{
            Letra = 'X';
        }
    
    var utmzone_string = String(Huso[0]) + " " + String(Letra);
    var utmzone_M = [utmzone_string];
    
    for (var i=1; i<Lat.length; i++) {
    
        if (Lat[i] < -72) {
            Letra = 'C';
        } else if (Lat[i] < -64) {
            Letra = 'D';
        } else if (Lat[i] < -56) {
            Letra = 'E';
        } else if (Lat[i] < -48) {
            Letra = 'F';
        } else if (Lat[i] < -40) {
            Letra = 'G';
        } else if (Lat[i] < -32) {
            Letra = 'H';
        } else if (Lat[i] < -24) {
            Letra = 'J';
        } else if (Lat[i] < -16) {
            Letra = 'K';
        } else if (Lat[i] < -8) {
            Letra = 'L';
        } else if (Lat[i] < 0) {
            Letra = 'M';
        } else if (Lat[i] < 8) {
            Letra = 'N';
        } else if (Lat[i] < 16) {
            Letra = 'P';
        } else if (Lat[i] < 24) {
            Letra = 'Q';
        } else if (Lat[i] < 32) {
            Letra = 'R';
        } else if (Lat[i] < 40) {
            Letra = 'S';
        } else if (Lat[i] < 48) {
            Letra = 'T';
        } else if (Lat[i] < 56) {
            Letra = 'U';
        } else if (Lat[i] < 64) {
            Letra = 'V';
        } else if (Lat[i] < 72) {
            Letra = 'W';
        }else{
            Letra = 'X';
        }
        
        utmzone_string =  String(Huso[i]) + " " + String(Letra);
        utmzone_M.push(utmzone_string);
    }
    
 
    var a = Math.cos(lat[0]) * Math.sin(deltaS[0]);
    var epsilon = 0.5 * Math.log( ( 1 +  a) / ( 1 - a ) );
    var nu = Math.atan( Math.tan(lat[0]) / Math.cos(deltaS[0]) ) - lat[0];
    var v = ( c / Math.sqrt( ( 1 + ( e2cuadrada * ( Math.cos(lat[0]) ) * ( Math.cos(lat[0]) ) ) ) ) ) * 0.9996;
    var ta = ( e2cuadrada / 2 ) * epsilon * epsilon * ( Math.cos(lat[0]) ) * ( Math.cos(lat[0]) );
    var a1 = Math.sin( 2 * lat[0] );
    var a2 = a1 * ( Math.cos(lat[0]) ) * (Math.cos(lat[0]) );
    var j2 = lat[0] + ( a1 / 2 );
    var j4 = ( ( 3 * j2 ) + a2 ) / 4;
    var j6 = ( ( 5 * j4 ) + ( a2 * ( Math.cos(lat[0]) ) * ( Math.cos(lat[0]) ) ) ) / 3;
    var alfa = ( 3 / 4 ) * e2cuadrada;
    var beta = ( 5 / 3 ) * alfa * alfa;
    var gama = ( 35 / 27 ) * alfa * alfa * alfa;
    var Bm = 0.9996 * c * ( lat[0] - alfa * j2 + beta * j4 - gama * j6 );
    var xx = [epsilon * v * ( 1 + ( ta / 3 ) ) + 500000];
    var yy = [nu * v * ( 1 + ta ) + Bm];

    for (var i=1; i<Huso.length; i++) {
        a = Math.cos(lat[i]) * Math.sin(deltaS[i]);
        epsilon = 0.5 * Math.log( ( 1 +  a) / ( 1 - a ) );
        nu = Math.atan( Math.tan(lat[i]) / Math.cos(deltaS[i]) ) - lat[i];
        v = ( c / Math.sqrt( ( 1 + ( e2cuadrada * ( Math.cos(lat[i]) ) * ( Math.cos(lat[i]) ) ) ) ) ) * 0.9996;
        ta = ( e2cuadrada / 2 ) * epsilon * epsilon * ( Math.cos(lat[i]) ) * ( Math.cos(lat[i]) );
        a1 = Math.sin( 2 * lat[i] );
        a2 = a1 * ( Math.cos(lat[i]) ) * ( Math.cos(lat[i]) );
        j2 = lat[i] + ( a1 / 2 );
        j4 = ( ( 3 * j2 ) + a2 ) / 4;
        j6 = ( ( 5 * j4 ) + ( a2 * ( Math.cos(lat[i]) ) * ( Math.cos(lat[i]) )) ) / 3;
        alfa = ( 3 / 4 ) * e2cuadrada;
        beta = ( 5 / 3 ) * alfa * alfa;
        gama = ( 35 / 27 ) * alfa * alfa * alfa;
        Bm = 0.9996 * c * ( lat[i] - alfa * j2 + beta * j4 - gama * j6 );
        xx.push(epsilon * v * ( 1 + ( ta / 3 ) ) + 500000);
        yy.push(nu * v * ( 1 + ta ) + Bm);
    }
    
    
    
    for (var i = 0; i<yy.length; i++) {
        if (yy[i] < 0) {
            yy[i] += 9999999;
        }
    }
    
    var return_array = [xx, yy, utmzone_M];
    
    return return_array;
}
//  _________________
// |                 |
// |                 |
// | End of Function |
// |                 |
// |_________________|
//


//UTM to Degrees Function
function utm2deg(xx, yy, utmzone) {
    
    var n1 = xx.length;
    var n2 = yy.length;
    var n3 = utmzone.length;
    
    if (n1 != n2 || n1 != n3) {
        alert("x,y and utmzone vectors should have the same number or rows");
    }
    
   
    var sa = 6378137.000000;
    var sb = 6356752.314245;
    
    var e2 = ( Math.sqrt(((sa*sa) - (sb*sb))) ) / sb;
    var e2cuadrada = e2 * e2;
    var c = (sa*sa) / sb;
   
    var Lat = [];
    var Lon = [];
    var hemis;
    for (var i=0; i<n1; i++) {
    
        if (utmzone[i][3] > 'X' || utmzone[i][3] < 'C') {
            alert(" Warning utmzone should be a vector of strings like '30 T', not '30 t'");
        }
        
        if (utmzone[i][3] > 'M') {
            hemis = 'N';
        } else {
            hemis = 'S';
        }
        
        var x = xx[i];
        var y = yy[i];
        var zone = parseInt(utmzone[i]);
        
        var X = x - 500000;
        var Y;
        if (hemis == 'S' || hemis == 's') {
            Y = y - 10000000;
        } else {
            Y = y;
        }
        
        
        var S = ( ( zone * 6 ) - 183 ); 
        var lat =  Y / ( 6366197.724 * 0.9996 );                                    
        var v = ( c / Math.sqrt( ( 1 + ( e2cuadrada * ( Math.cos(lat) ) * ( Math.cos(lat) ) ) ) ) ) * 0.9996;
        var a = X / v;
        var a1 = Math.sin( 2 * lat );
        var a2 = a1 * ( Math.cos(lat) ) * ( Math.cos(lat) );
        var j2 = lat + ( a1 / 2 );
        var j4 = ( ( 3 * j2 ) + a2 ) / 4;
        var j6 = ( ( 5 * j4 ) + ( a2 * ( Math.cos(lat) ) * ( Math.cos(lat) ) ) ) / 3;
        var alfa = ( 3 / 4 ) * e2cuadrada;
        var beta = ( 5 / 3 ) * alfa * alfa;
        var gama = ( 35 / 27 ) * alfa * alfa * alfa;
        var Bm = 0.9996 * c * ( lat - alfa * j2 + beta * j4 - gama * j6 );
        var b = ( Y - Bm ) / v;
        var Epsi = ( ( e2cuadrada * a * a ) / 2 ) * ( Math.cos(lat) ) * ( Math.cos(lat) );
        var Eps = a * ( 1 - ( Epsi / 3 ) );
        var nab = ( b * ( 1 - Epsi ) ) + lat;
        var senoheps = ( Math.exp(Eps) - Math.exp(-Eps) ) / 2;
        var Delt = Math.atan(senoheps / (Math.cos(nab) ) );
        var TaO = Math.atan(Math.cos(Delt) * Math.tan(nab));
        var longitude = (Delt *(180 / Math.PI ) ) + S;
        var latitude = ( lat + ( 1 + e2cuadrada* (Math.cos(lat)^ 2) - ( 3 / 2 ) * e2cuadrada * Math.sin(lat) * Math.cos(lat) * ( TaO - lat ) ) * ( TaO - lat ) ) * (180 / Math.PI);
        
        if (Lat.length == NaN) {
            Lat = [latitude];
            Lon = [longitude];
        } else {
            Lat.push(latitude);
            Lon.push(longitude);
        }
    }
    
    var return_array = [Lat, Lon];
    
    return return_array;
}
//  _________________
// |                 |
// |                 |
// | End of Function |
// |                 |
// |_________________|
//



//Takes utm coordinates and outputs them all in the same UTM zone
function utm_zone_mod(Coordinates) {
    
    //var UTM = [C, D, E, F, 
               //G, H, J, K, 
               //L, M,
               //N, P, Q, R, 
               //S, T, U, V,
               //W, X];
    
    //UTM zone dimensions do not change as you go east and west, just north and south
    
    var UTMx = [206937.60462677642, 206937.60462677642, 293479.209076416, 374235.6942969916, 
                447635.4254352151, 512260.8630573689, 566880.8754548477, 610457.9933552117, 
                642176.4647191482, 661445.6151970772, 
                667908.4673279062, //equator
                661445.6151970772, 642176.4647191482, 610457.9933552117, 566880.8754548477,
                512260.8630573689, 447635.4254352151, 374235.6942969916, 293479.209076416,
                206937.60462677642];  

    var UTMy = [2009810.8648844596, 892266.3024614088, 891282.1534345208, 890124.1190612282,
                888887.2829307698, 887665.3293948119, 886552.5277786559, 885634.1797139486,
                884980.2887697788, 884640.4835743447, //equator
                884640.4835743447, 884980.2887697788, 885634.1797139486, 886552.5277786559,
                887665.3293948119, 888887.2829307698, 890124.1190612282, 891282.1534345208,
                892266.3024614088, 2009810.8648844596];
    
    var utm_letter_positions = {};
        utm_letter_positions["C"] = 0;
        utm_letter_positions["D"] = 1;
        utm_letter_positions["E"] = 2;
        utm_letter_positions["F"] = 3;
        utm_letter_positions["G"] = 4;
        utm_letter_positions["H"] = 5;
        utm_letter_positions["J"] = 6;
        utm_letter_positions["K"] = 7;
        utm_letter_positions["L"] = 8;
        utm_letter_positions["M"] = 9;
        utm_letter_positions["N"] = 10;
        utm_letter_positions["P"] = 11;
        utm_letter_positions["Q"] = 12;
        utm_letter_positions["R"] = 13;
        utm_letter_positions["S"] = 14;
        utm_letter_positions["T"] = 15;
        utm_letter_positions["U"] = 16;
        utm_letter_positions["V"] = 17;
        utm_letter_positions["W"] = 18;
        utm_letter_positions["X"] = 19;
    
    function countInArray(array, what) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === what) {
                count++;
            }
        }
        return count;
    }
    
    function ref_zone(utm_zone) {
       
        //This loops through all the utm zones of the coordinates
        //and adds only unique zones to the results array
        //meaning it gets rid of any repeats
        var results = [];
        for (var i = 0; i < utm_zone.length - 1; i++) {
            if (utm_zone[i + 1] == utm_zone[i] && countInArray(utm_zone[i], results) == 0) {
                results.push(utm_zone[i]);
            }
        }
        
        //figurese out which utm zone to use as a reference zone
        var reference_utm;
        var most_repeats = 0;
        if (results.length == 0) {
            return [utm_zone[0], 0]; //if there are no repeats, just return the first coordinate
        } else {
            for (var i=0; i<utm_zone.length; i++) {
                //finds the utm zone that repeats the most
                var repeats = countInArray(utm_zone, results[i]);
                if (repeats >= utm_zone.length/2) {
                    reference_utm = results[i];
                    most_repeats = repeats;
                    break;
                } else if (repeats > most_repeats) {
                    reference_utm = results[i];
                    most_repeats = repeats;
                }
            }
            return [reference_utm, most_repeats];
        }
    }
    
    //finds the change in easting between the reference zone and utm zone of the coordinate
    function dx(xi, xf, ref_zone) {
        var negative;
        if (xi == xf) {
            return 0;
        } else if (xi < xf) {
            negative = 1;
        } else {
            negative = -1;
        }
        
        //the x coordinate is only dependent on its orientation in the y direction
        var difference = Math.abs(xi - xf) * UTMx[utm_letter_positions[ref_zone]];
        return difference * negative;
    }
    
    //finds the change in northing between the reference zone and utm zone of the coordinate
    function dy(yi0, yf0) {
        var yi;
        var yf;
        var negative;
        if (yi0 == yf0) {
            return 0;
        } else if (yi0 < yf0) {
            yi = yi0;
            yf = yf0;
            negative = 1;
        } else {
            yi = yf0;
            yf = yi0;
            negative = -1
        }
        
        var difference = 0;
        for (var i = yi; i < yf; i++) {
            difference += UTMy[utm_letter_positions[i]];
        }
        return difference * negative;
    }
    
    
    var x = Coordinates[0];
    var y = Coordinates[1];
    var utm = Coordinates[2];
    var x_modify = [];
    var y_modify = [];
    var utm_modify = [];
    
    var zone = ref_zone(utm)[0];
    
    //for consistancy in string length, if the zone number is less than 10 it adds a zero in front
    //7T --> 07T
    if (parseInt(zone[0] + zone[1]) < 10) {
        zone = "0" + zone;
    }
    
    //This finally loops through the coordiantes and changes the utm zone of the coordinates to the reference zone
    for (var i = 0; i < utm.length; i++) {
        if (utm[i] == zone) {
            x_modify.push(x[i]);
            y_modify.push(y[i]);
            utm_modify.push(utm[i]);
        } else {
            x_modify.push(x[i] + dx(parseInt(zone[0] + zone[1]), parseInt(utm[i][0] + utm[i][1]), zone[3]));
            y_modify.push(y[i] + dy(zone[3], utm[i][3]));
            utm_modify.push(zone);
        }
    }
    
    return [x_modify, y_modify, utm_modify];
}
//  _________________
// |                 |
// |                 |
// | End of Function |
// |                 |
// |_________________|
//


//WARNING: This function assumes all points are in the same UTM zone
function utm_zone_relative_start_point(utm_zone) {
	
	var start_easting = utm_zone[0][0];
	var start_northing = utm_zone[1][0];
	var start_zone = utm_zone[2][0];
	
	var relative_utm = [];
	
	for (var i=0; i < utm_zone[0].length; i++) {
		relative_utm.push([utm_zone[0][i] - start_easting, utm_zone[1][i] - start_northing, start_zone]);
	}
	
	return relative_utm;
}
//  _________________
// |                 |
// |                 |
// | End of Function |
// |                 |
// |_________________|
//





//DOWNLOADING TEXTFILES


//Makes string that we export to the textfile
function AllPointsOutString(LatArray, LonArray, LineArray, PolyArray) {

	var AllLat = LatArray;
	for (var i=0; i < LineArray.length; i++) {
		AllLat.push(LineArray[i][0]);
		AllLat.push(LineArray[i][2]);
	}
	for (var i=0; i < PolyArray.length; i++) {
		for (var j=0; j < PolyArray[i].length; j+=2) {
			AllLat.push(PolyArray[i][j+1]);
		}
	}
	
	var AllLon = LonArray;
	for (var i=0; i < LineArray.length; i++) {
		AllLon.push(LineArray[i][1]);
		AllLon.push(LineArray[i][3]);
	}
	for (var i=0; i < PolyArray.length; i++) {
		for (var j=0; j < PolyArray[i].length; j+=2) {
			AllLon.push(PolyArray[i][j]);
		}
	}


    if (AllLat == null) {
        return "";
    }else {
        var LatLongString = "LatOrigin = " + AllLat[0] + "\r\nLonOrigin = " + AllLon[0] + "\r\n\r\n";

	 LatLongString += "All Points in Lat/Lon\r\n" + "Latitude, Longitude\r\n";
        for (var i = 0; i < AllLat.length; i++) {
            LatLongString += AllLat[i] + ", " + AllLon[i] + "\r\n";
        }
	
        var UserUTM = deg2utm(AllLat, AllLon);
        LatLongString += "\r\nAll Points in UTM\r\n" + "Easting, Northing\r\n";
        for (var i = 0; i < UserUTM[0].length; i++) {
            LatLongString += UserUTM[0][i] + ", " + UserUTM[1][i] + " : ";
        }
	
        var RelativeUTM = utm_zone_relative_start_point(UserUTM);
        LatLongString += "\r\n\r\nAll Points in UTM relative to the 1st Point\r\n" + "Easting, Northing\r\n";
        for (var i = 0; i < RelativeUTM.length; i++) {
            LatLongString += RelativeUTM[i][0] + ", " + RelativeUTM[i][1] + " : ";
        }
        
        return LatLongString;
    }
}


function hypackPoly(PolyArray, LineNum) {
	var OutString = "";
	for (var j=4; j<PolyArray.length; j+=4) {
		OutString += "LIN 2\r\nPTS " + PolyArray[j+1] + " " + PolyArray[j] + "\r\n";
		OutString += "PTS " + PolyArray[j+3] + " " + PolyArray[j+2] + "\r\n";
		OutString += "LNN " + LineNum.toString() + "\r\nEOL\r\n";
		++LineNum;
	}
	return [OutString, LineNum];
}

function hypackOutString(UserLat, UserLon, UserLines, UserPolylines, Order) {
	
	//putting the points in the order they were drawn
	var Points_in_Order = [];
	for (var i=0; i<Order.length; i++) {
		if (Order[i][0] == "P") {
			Points_in_Order.push([UserLat[parseInt(Order[i][1])-1], UserLon[parseInt(Order[i][1])-1]]);
		} else if (Order[i][0] == "L") {
			Points_in_Order.push(UserLines[parseInt(Order[i][1])-1]);
		} else if (Order[i][0] == "M") {
			Points_in_Order.push(UserPolylines[parseInt(Order[i][1])-1]);
		}
	}
	//alert(Order);
	//alert(Points_in_Order);
	var OutString = "";
	var LineNum = 1;
	

	for (var i=0; i<Order.length; i++) {
		if (Order[i][0] == "P" && Order[i+1][0] == "P") {
			OutString += "LIN 2\r\nPTS " + Points_in_Order[i][0] + " " + Points_in_Order[i][1] + "\r\n";
			OutString += "PTS " + Points_in_Order[i+1][0] + " " + Points_in_Order[i+1][1] + "\r\n";
			OutString += "LNN " + LineNum.toString() + "\r\nEOL\r\n";
			++LineNum;
		} else if (Order[i][0] == "L") {
			if (Points_in_Order[i][2] != Points_in_Order[i-2][1] || Points_in_Order[i][3] != Points_in_Order[i-2][0]) {
				OutString += "LIN 2\r\nPTS " + Points_in_Order[i][1] + " " + Points_in_Order[i][0] + "\r\n";
				OutString += "PTS " + Points_in_Order[i][3] + " " + Points_in_Order[i][2] + "\r\n";
				OutString += "LNN " + LineNum.toString() + "\r\nEOL\r\n";
				++LineNum;
			}
		} else if (Order[i][0] == "M") {
			if (Points_in_Order[i][2] != Points_in_Order[i-2][1] || Points_in_Order[i][3] != Points_in_Order[i-2][0]) {
				OutString += "LIN 2\r\nPTS " + Points_in_Order[i][1] + " " + Points_in_Order[i][0] + "\r\n";
				OutString += "PTS " + Points_in_Order[i][3] + " " + Points_in_Order[i][2] + "\r\n";
				OutString += "LNN " + LineNum.toString() + "\r\nEOL\r\n";
				++LineNum;
			}
			var hypackArray = hypackPoly(Points_in_Order[i], LineNum);
			OutString += hypackArray[0];
			LineNum = hypackArray[1] - 1;
		}
	}
	
	OutString = "LNS " + LineNum.toString() + "\r\n" + OutString;
	
	return OutString;
}
//This creates a file that the user can download locally 
function download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

    //build download link:
    a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);


    if (window.MSBlobBuilder) { // IE10
        var bb = new MSBlobBuilder();
        bb.append(strData);
        return navigator.msSaveBlob(bb, strFileName);
    } /* end if(window.MSBlobBuilder) */



    if ('download' in a) { //FF20, CH19
        a.setAttribute("download", n);
        a.innerHTML = "downloading...";
        D.body.appendChild(a);
        setTimeout(function() {
            var e = D.createEvent("MouseEvents");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            D.body.removeChild(a);
        }, 66);
        return true;
    }; // end if('download' in a)



    //do iframe dataURL download: (older W3)
    var f = D.createElement("iframe");
    D.body.appendChild(f);
    f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
    return true;
}








//Drawing functions ↓

//Function that creates actual Way Points
function getLatLong_Points(e){
    var mousePosition = new Cesium.Cartesian2(e.clientX, e.clientY);
    var ellipsoid = viewer.scene.globe.ellipsoid;
    var cartesian = viewer.camera.pickEllipsoid(mousePosition, ellipsoid);
    if (cartesian) {
        var cartographic = ellipsoid.cartesianToCartographic(cartesian);
        var longitudeString = Cesium.Math.toDegrees(cartographic.longitude);
        var latitudeString = Cesium.Math.toDegrees(cartographic.latitude);
        UserLat.push(latitudeString);
        UserLon.push(longitudeString);
        ++numClicks;
        //Creating the Points
        var point = viewer.entities.add({
        name : 'Way Point ' + numClicks.toString(),
        position : Cesium.Cartesian3.fromDegrees(parseFloat(UserLon[numClicks-1]), parseFloat(UserLat[numClicks-1])),
        point : {
         pixelSize : 10,
         color : Cesium.Color.RED
         }
         });
         point.description = UserLat[numClicks-1] + ', ' + UserLon[numClicks-1];
                 Order.push("P"+ numClicks.toString());

    } else {
            //If you want something to happened when the user clicks outside the globe
                    //put it here
    }
}

//This might by redundant
//Function that makes a polygon in real time from Way Points

function getLatLong_Polygon(e){
    
    var combinedLatLong = [];
    for (var i=0; i < UserLat.length; i++) {
         combinedLatLong.push(UserLon[i], UserLat[i]);
    }

    //Creating the Polygon
    var polygon = viewer.entities.add({
        name : 'Polygon',
        polygon : {
            hierarchy : Cesium.Cartesian3.fromDegreesArray(combinedLatLong),
            height : 0,
            material : Cesium.Color.YELLOW.withAlpha(0.5),
            outline : true,
            outlineWidth : 3,
            outlineColor : Cesium.Color.BLACK
        }  
    });
}


//function to get an array of points for the polyline that makes up the Lawn Mower
//There can be different shapes of the Lawn Mower, this is a function for one such shape
function getLatLong_Polyline(StartLat, StartLong, EndLat, EndLong, Range, Bearing, Number, Width, handedness) {
    var polylineArray = [StartLong, StartLat, EndLong, EndLat];
    
    var SLat = EndLat;
    var SLong = EndLong;
    var ELat;
    var ELong;

    var newBearing = Bearing;
    var newRange = Range;

    for (var i = 2; i < Number*2; i++) {

        if (ELat != undefined) {
            SLat = ELat;
            SLong = ELong;
        }

        //This makes the shape of the lawn mower
        //There's a 4 step rotation, which is why I use % 4
        //There are 2 symetrical shapes, which is why there is an elseif statement
        if (handedness == "right") {
            if (i % 4 == 1) {
                newBearing -= 90;
                newRange = Range;
            } else if (i % 4 == 2) {
                newBearing += 90;
                newRange = Width/(Number-1);
            } else if (i % 4 == 3) {
                newBearing += 90;
                newRange = Range;
            } else if (i % 4 == 0) {
                newBearing -= 90;
                newRange = Width/(Number-1);
            } else {
                alert ("something went wrong 1");
            }
        } else if (handedness == "left") {
            if (i % 4 == 1) {
                newBearing += 90;
                newRange = Range;
            } else if (i % 4 == 2) {
                newBearing -= 90;
                newRange = Width/(Number-1);
            } else if (i % 4 == 3) {
                newBearing -= 90;
                newRange = Range;
            } else if (i % 4 == 0) {
                newBearing += 90;
                newRange =  Width/(Number-1);
            } else {
                alert ("something went wrong 2");
            }
        } else {
            alert ("something went wrong 3");
        }

        //getting new endpoints
        var R = 6371010; //in meters
        var distRatio = newRange / R;
        var distRatioSine = Math.sin(distRatio);
        var distRatioCosine = Math.cos(distRatio);

        var startLatRad = SLat*(Math.PI/180);
        var startLonRad = SLong*(Math.PI/180);

        var startLatCos = Math.cos(startLatRad);
        var startLatSin = Math.sin(startLatRad);

        var endLatRads = Math.asin((startLatSin * distRatioCosine) + (startLatCos * distRatioSine * Math.cos(newBearing*(Math.PI/180))));

        var x = Math.sin(newBearing*(Math.PI/180)) * distRatioSine * startLatCos;
        var y = distRatioCosine - startLatSin * Math.sin(endLatRads);
        var endLonRads = startLonRad + Math.atan2(x, y);

        ELat = endLatRads*(180/Math.PI);
        ELong = endLonRads*(180/Math.PI);

        polylineArray.push(ELong, ELat);
    }
    
    return polylineArray;
}
