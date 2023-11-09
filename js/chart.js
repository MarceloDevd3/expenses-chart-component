

function blueColor() {
  var progress = document.querySelectorAll('.progress-bar')
 
  progress.forEach(function(color) {
     color.addEventListener('click', function(){
        color.classList.add('active')
     })
     color.classList.remove('active')
  })

  

}

