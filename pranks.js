['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	document.body.style[prefix + 'transform'] = 'rotate(180deg)';
});


// Better one
['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){
		el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
	});
});

function onMouseMove(e){
['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){
		el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
	});
});
}

document.addEventListener("mousemove",onMouseMove)

function clickTurn(e){
  ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	document.body.style[prefix + 'transform'] = 'rotate(180deg)';
});
}



document.addEventListener ("click",clickTurn)

var links = document.querySelectorAll("a");

for (let i = 0; i < links.length; i ++){
  links[i].href="https://www.youtube.com/watch?v=IPUfhcL7Tfo"
Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){
	el.src = 'http://forgifs.com/gallery/d/247378-2/Kim-Jong-Un-North-Korea-tag-teamed.gif';
});

}

var fart = new Audio();
fart.src = "http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/People/Funny/fart-Deian_G-7360/fart-Deian_G-7360_hifi.mp3";
function playFart(){
	fart.play();
}
	
document.addEventListener("click",playFart);
