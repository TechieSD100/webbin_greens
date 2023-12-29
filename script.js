// Display a preloader
window.addEventListener('load', function () {
	setTimeout(removeLoader, 2500); // 2.5 seconds
  });

  function removeLoader() {
	var loadingElement = document.getElementById('loading-overlay');
	loadingElement.parentNode.removeChild(loadingElement);

	var loadingTextElement = document.getElementById('loading-text');
	loadingTextElement.style.display = 'none';
  }





let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let bio = document.getElementById('bio');

//parallax effect
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    bio.style.marginTop = value * -1 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 0.9 + 'px';
});


//clickable Image Boxes
var clickableDiv1 = document.getElementById('box1');
clickableDiv1.addEventListener('click', function() {
    var redirectUrl = 'Templates/portfolio2.html';
    window.location.href = redirectUrl;
});

var clickableDiv2 = document.getElementById('box2');
clickableDiv2.addEventListener('click', function() {
    var redirectUrl = 'Templates/portfolio1.html';
    window.location.href = redirectUrl;
});

var clickableDiv3 = document.getElementById('box3');
clickableDiv3.addEventListener('click', function() {
    var redirectUrl = 'Templates/portfolio3.html';
    window.location.href = redirectUrl;
});