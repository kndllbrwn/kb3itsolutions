// Two methods for timers - setTimeout and SetInterval (single / repeating)

function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
//setTimeout(simpleMessage, 5000);
var myImage = document.getElementById("sat");

var imageArray = ["S2.png","S3.png",
				  "S4.png","S5.png","S6.png","images/S7.png"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
setInterval(changeImage,5000);

$("#overview").click(function() {
console.log ( '#someButton was clicked' );
$(".clerkships”).hide();
               
            });
        }); 
		var test = 5;