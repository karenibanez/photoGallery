// JavaScript Document

//author: kibanez444@yahoo.com



var imgName = "images/img";
var imgType = ".jpg";
var total = "20";
var cache    =  true;                              //pre-load image? true or false
var repeat   =  true;                              //continue loop? true or false
var img1 = true;
var img2 = true;


//preload main images

var next     =  0;                                 //the next image number
var picArray = new Array();                        //Create Array to store images

if (cache) {                                       //if caching is requested
    for (var i = 1; i <= total; i++) {             //loop for total number of images
        picArray[i]     = new Image();             //Create an Image object 
        picArray[i].src = imgName + i + imgType;   //Load Image object with the .jpg file
    }
}
if (!cache) {					  //if caching is not requested
    picArray[1]     = new Image();                //Create an Image object 
    picArray[1].src = imgName + 1 + imgType;      //Load Image object with first .jpg file
}


//creating thumbnail images and captions

var smallImages = new Array ("images/img1_th.jpg", "images/img2_th.jpg", "images/img3_th.jpg", "images/img4_th.jpg", "images/img5_th.jpg", "images/img6_th.jpg", "images/img7_th.jpg", "images/img8_th.jpg", "images/img9_th.jpg", "images/img10_th.jpg", "images/img11_th.jpg", "images/img12_th.jpg", "images/img13_th.jpg", "images/img14_th.jpg", "images/img15_th.jpg", "images/img16_th.jpg", "images/img17_th.jpg", "images/img18_th.jpg", "images/img19_th.jpg", "images/img20_th.jpg");

var caption = new Array("Brooklyn Prospect Park","Brooklyn BQE", "Brooklyn Bridge Park", "Brooklyn Ice Cream Factory","Chicago Bean", "Chicago Crown Fountain", "Chicago Crown Fountain", "Chicago L train", "Hawaii Waikiki Beach", "Hawaii Oahu", "Hawaii Waikiki Beach", "Hawaii Oahu", "Japan Okinawa", "Japan Tokyo", "Japan Okinawa", "Japan Okinawa", "Seattle Space Needle", "Seattle Museum of Art", "Seattle Pike Place Market", "Seattle Original Starbucks");

//slideshow


function run() {
    

 if(next==0){	
	document.img1.src = smallImages[19];
	document.img2.src = smallImages[1];
 }
 
  if(next==19){	
	document.img1.src = smallImages[18];
	document.img2.src = smallImages[0];
 }	
 
	

	next = next+1;    

    if (repeat  && next > total)                   //if repeat is requested and going forward
        next = 1;                                  //reset number to 1
    if (repeat && next <= 0)                       //if repeat is requested and going backward
        next = total;                              //reset number to total number of images

   
    if (!repeat && next <= 0) {     		   //if no repeat and we reached the beginning  
        next = 1;                                  //reset number to 1
        return;					   //exit
    }

	
	
	
	document.img2.src = smallImages[next];
    document.slideShow.src = picArray[next].src;   //Move next image into slideShow
	document.getElementById("caption").innerHTML = caption[next-1]; 
	
	
	 last(next); //check for last image
	
	
	
}


function first() {			//set to first image 					
    next = 0;					 
    run();
} 

function last(next){		

	 if(next==total){	
	document.img1.src = smallImages[18];
	document.img2.src = smallImages[0];
	
 }	

}


function move(direction) {		//move next or previous					//
 
	if (direction == 'N') {
		next += 0;	
		

	}
	
	if (direction == 'P') {
		next -= 2;	
			
	} 
	
	document.img1.src = smallImages[next-1];
	
	run();
}

//jquery for media query

$(document).ready(function(){
	$('#content').hide();
	$('#button').hide();
	$('#item a').click(function(){
		$('#thumb').slideUp(999);
		$('#content').show();
		$('#button').show();
		$('#placeholder').attr('src',this.href);
		$('#description').html(this.title);
		$('#placeholder').attr('alt',this.title);
		return false;				 
									 
	});

});

$(document).ready(function(){

	$('#button a').click(function(){
		
		$('#thumb').slideDown(999);
		$('#thumb').show();
		$('#content').hide();
		$('#button').hide();
		return false;
	});

}
);



