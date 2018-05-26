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
  links[i].href="https://www.youtube.com/watch?v=lvZBGJkbeTE"
Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){
	el.src = 'https://i.ytimg.com/vi/0vxCFIGCqnI/maxresdefault.jpg';
});

}
