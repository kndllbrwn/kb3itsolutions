$.getJSON('ldata.json', function(data) {
	var output;
	$.each(data, function(key, val) {
		output += '<h1 class="pageTitle">' + val.Title;
		output += '</h1><h2 class="header">' + val.h1; 
		output +='</h2><p class="paragraph">' + val.p1; 
		output += '</p>'; 
		output += '</h1><h2 class="header">' + val.h2; 
		output +='</h2><p class="paragraph">' + val.p2; 
		output += '</p>'; 
		output += '</h1><h2 class="header">' + val.h3; 
		output +='</h2><p class="paragraph">' + val.p3; 
		output += '</p>'; 
		output += '</h1><h2 class="header">' + val.h4; 
		output +='</h2><p class="paragraph">' + val.p4; 
		output += '</p>'; 
		output += '</h1><h2 class="header">' + val.h5; 
		output +='</h2><p class="paragraph">' + val.p5; 
		output += '</p>'; 
		output += '</h1><h2 class="header">' + val.h6; 
		output +='</h2><p class="paragraph">' + val.p6; 
		output += '</p>'; 
		});
		//file:///C|/xampp/htdocs/ajax/Exercise%20Files/03-03/finished/ajax/index.html
	$('#update').prepend(output);
});