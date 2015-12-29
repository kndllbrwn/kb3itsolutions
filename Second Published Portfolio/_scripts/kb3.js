$(document).ready(function() { 
var projectsXS = [
'<h2 class="portfolio" style="padding-top:10px;">Projects </h2>',
'<div class="row">',
'            <div class="col-lg-8 col-lg-offset-2">',
'   <div class="container shorten">',
'  <br>',
'  <div id="myCarousel" class="carousel slide" data-ride="carousel">',
'    <!-- Indicators -->',
'    <ol class="carousel-indicators">',
'      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>',
'      <li data-target="#myCarousel" data-slide-to="1"></li>',
'      <li data-target="#myCarousel" data-slide-to="2"></li>',
'      <li data-target="#myCarousel" data-slide-to="3"></li>',
'      <li data-target="#myCarousel" data-slide-to="4"></li>',
'      <li data-target="#myCarousel" data-slide-to="5"></li>',
'      <li data-target="#myCarousel" data-slide-to="6"></li>',
'      <li data-target="#myCarousel" data-slide-to="7"></li>',
'      <li data-target="#myCarousel" data-slide-to="8"></li>',
'    </ol>',
'    <!-- Wrapper for slides -->',
'    <div class="carousel-inner" role="listbox">',
'      <div class="item active">',
'        <img src="http://www.sixarm.com/projects/ruby.png" data-toggle="modal" data-target="#m1" alt="Ruby" class="wheel">',
'      </div>',
'      <div class="item">',
'        <img src="http://2.bp.blogspot.com/-b3ZIlpZ-gZg/VExleliTX2I/AAAAAAAAEOs/PYnuaBJhAJE/s1600/javascript.png" alt="JavaScript" class="wheel" data-toggle="modal" data-target="#m2">',
'      </div>',
'      <div class="item">',
'        <img src="http://www.wmyl.se/wp-content/uploads/2012/09/angular_logo.png" alt="AngularJS" class="wheel" data-toggle="modal" data-target="#m3">',
'      </div>',
'      <div class="item">',
'        <img src="http://devjs.eu/wp-content/uploads/2013/09/css3-markup.jpg" alt="CSS3" class="wheel" data-toggle="modal" data-target="#m4">',
'        </div>',
'        <div class="item">',
'        <img src="http://revel.in/wp-content/uploads/2015/04/UX.jpeg" alt="UX" class="wheel" data-toggle="modal" data-target="#m5">',
'      </div>',
'        <div class="item">',
'        <img src="https://cdn4.iconfinder.com/data/icons/bettericons/354/github-circle-128.png" alt="GitHub" class="wheel" data-toggle="modal" data-target="#m6">',
'      </div>',
'        <div class="item">',
'        <img src="http://www.artguth.com/pagina/menus/105/jquery-logo.png" alt="jQuery" class="wheel" data-toggle="modal" data-target="#m7">',
'      </div>',
'        <div class="item">',
'        <img src="https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png" alt="nodeJS" class="wheel" data-toggle="modal" data-target="#m8">',
'      </div>',
'        <div class="item">',
'        <img src="http://codesters.org/media/topics/sql.png" alt="SQL" class="wheel" data-toggle="modal" data-target="#m9">',
'      </div>',
'      </div>',
'    </div>',
'    <!-- Left and right controls -->',
'    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">',
'      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>',
'      <span class="sr-only">Previous</span>',
'    </a>',
'    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">',
'      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>',
'      <span class="sr-only">Next</span>',
'    </a>',
'  </div>',
'</div>      ',
'    </div>',
'      </div>',
'      <div class="row">',
'        	<div class="col-xs-2 col-xs-offset-4">',
'             <a href="#about" class="btn btn-circle page-scroll text-center"><i class="fa fa-angle-double-down animated"></i></a>',
'         	</div>',
'     </div>'
].join('');  
var qoutes=['"Once you stop learning, you start dying." Though Albert Einstein was born over a century ago in Germany, his mantra has been paramount to my growth and success as a professional. As a first generation college graduate and native of the District of Columbia, the city with the nations largest achievement gap between poor children and their wealthy counterparts, it is only through mastering the alchemy of education that I was able to become more than just a product of my environment. It also allowed me to attend one of the best schools in the world, Pennsylvania State University.', "As with any trailblazing journey there were highs and lows but on that road I acquired degrees in Sociology, Psychology, and Information Sciences as well as a wealth of experience in student support/leadership roles. My graduating thesis was how to best even the odds and achieve social justice for young boys and girls born in circumstances similar to myself. The most simple answer was: investment in human and social capital.", "Through my continued growth in courses like Copyrightx from Harvard University and knowledge gained through certification, I remain steadfast in my belief that technology is the key. There are few tools that have more helped democratize information available to the general public and common man. In my estimation, it is the best way of catalyzing the human and social capital growth that a physical environment may not nurture. Which is why it continues to be a cornerstone in growth of my personal and professional life.", "To describe myself in one sentence, I am- An Information technology enthusiast, with a genuine passion to invest in human and social capital for the promotion of social justice."];
  var c =0;
  function nextAbout(){
   c = c + 1;
		if (c === 4){c = 0;}
	return qoutes[c];
  }
   function prevAbout(){
   c = c - 1;
		if (c === -1){c = 3;}
	return qoutes[c];
  }
$("#a").click(function(){
  a = nextAbout(); 
  $("#gen").text(a);  
  });
  $("#b").click(function(){
  a = prevAbout(); 
  $("#gen").text(a);  
  });  
  
var buttonsJustify = function(){ 
if (window.innerWidth >= 767){$("#contactButtons").removeClass("btn-group-vertical").addClass("btn-group-justified");};
};
buttonsJustify();

var buttonsVertify = function(){ 
if (window.innerWidth < 768){$("#contactButtons").removeClass("btn-group-justified").addClass("btn-group-vertical");};
};
buttonsVertify();
var carouselFix = function(){ 
if (window.innerWidth < 768){$("#projects").html(projectsXS);};
};
carouselFix();

 $("#wcl1h").click(function(){
        $("#wcl1b").slideToggle("slow");
	});	
 $("#wcl2h").click(function(){
        $("#wcl2b").slideToggle("slow");
	});   
 $("#wcl3h").click(function(){
        $("#wcl3b").slideToggle("slow");
	});   
 $("#wcl4h").click(function(){
        $("#wcl4b").slideToggle("slow");
	}); 
 $("#wcl5h").click(function(){
        $("#wcl5b").slideToggle("slow");
	}); 
 $("#wcl6h").click(function(){
        $("#wcl6b").slideToggle("slow");
	});
$("#wcl7h").click(function(){
        $("#wcl7b").slideToggle("slow");
	});
$("#wcl8h").click(function(){
        $("#wcl8b").slideToggle("slow");
	});
$("#wcl9h").click(function(){
        $("#wcl9b").slideToggle("slow");
	});
$("#ll1h").click(function(){
        $("#ll1b").slideToggle("slow");
	});		
$("#ll3h").click(function(){
        $("#ll3b").slideToggle("slow");
	});		 		  	 
});
