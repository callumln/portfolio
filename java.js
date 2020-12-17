function newStyle() {
  let newColor = '';
  let newFont = ''; 
  let x = Math.floor(Math.random()*5); 
  switch (x){
    case 0:
		newColor = 'black'; 
        break;
    case 1: 
		newColor = 'purple';
        break;
    case 2:
		newColor = 'blue';
        break; 
    case 3:
		newColor= 'green';
        break
    case 4:
		newColor = 'yellow';
        break;
	 case 5: 
		newColor = 'red';
		break;
  }
  var elem = document.getElementById('myName');
  elem.style.color = newColor;
  elem.style.fontFamily = newFont; 
}

var slideIndex = 0;
showSlides();
function showSlides(){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 4000);
}