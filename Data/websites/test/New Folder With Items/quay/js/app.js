var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = false;
var rotateFn = 'rotateX';
var radius, theta;
var cellCount = 10;
var route;

// console.log( cellWidth, cellHeight );

function rotateCarousel() {
	
	//console.log(selectedIndex);
   if(selectedIndex > cellCount){
	  route = selectedIndex.toString().slice(-1); 
   }else{
	  route = selectedIndex;
   }
 //  console.log(typeof selectedIndex);
  // console.log(typeof selectedIndex);
  
   //selectedIndex = parseInt(selectedIndex);
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
    
    console.log('theta' + theta);
    //console.log(selectedIndex);
    console.log('radius' + radius);
    console.log('angle' + angle);
}



var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});

var cellsRange = document.querySelector('.cells-range');
cellsRange.addEventListener( 'change', changeCarousel );
cellsRange.addEventListener( 'input', changeCarousel );

setInterval(function(){
	// set initials
//onOrientationChange();
	  selectedIndex++;
     rotateCarousel();    
   // changeCarousel();
   //  console.log(selectedIndex);
}, 500);


function changeCarousel() {
  
 

 // rotateCarousel();
}


cellCount = cellsRange.value;
 
  theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

function onOrientationChange() {
  var checkedRadio = document.querySelector('input[name="orientation"]:checked');
  rotateFn = 'rotateX';
 // changeCarousel();
}

