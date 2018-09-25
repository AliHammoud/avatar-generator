window.addEventListener('load', function(){
  document.querySelector('.download').addEventListener('mouseover', function(e){
    pauseGeneration();
  });
  
  document.querySelector('.download').addEventListener('mouseout', function(e){
    resumeGeneration();
  })
})