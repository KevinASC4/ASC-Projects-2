var area = "NewYork";


document.getElementById("map").src ="https://maps.googleapis.com/maps/api/staticmap?center="+area+"k&size=640x640&style=element:labels|visibility:on&style=element:geometry.stroke|visibility:on&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:false&key=AIzaSyDDVU76O1GoF-0bCKKnbVJS5Aqr6qY2R24"

function changeArea(){
    area=document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+area+"k&size=640x640&style=element:labels|visibility:on&style=element:geometry.stroke|visibility:on&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:false&key=AIzaSyDDVU76O1GoF-0bCKKnbVJS5Aqr6qY2R24"
}