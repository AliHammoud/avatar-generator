window.addEventListener('load', function(){
  document.querySelector('.download').addEventListener('mouseover', function(e){
    pauseGeneration();
  });
  
  document.querySelector('.download').addEventListener('mouseout', function(e){
    if(document.querySelector('.button').classList.contains('play')){
      //if already paused
      return;
    } else {
      resumeGeneration();
    }
  });
  
  document.querySelector('.download').addEventListener('click', function(e){
    link = document.getElementById('download_link');
    link.href = document.querySelector('canvas').toDataURL();
    link.download = 'avatar300.png';
    link.click();
    console.log(link);
  });
  
  document.querySelector('.button').addEventListener('mouseover', function(e){
    document.querySelector('.btn-icon').classList.add('over');
  });
  

  document.querySelector('.button').addEventListener('mouseout', function(e){
    document.querySelector('.btn-icon').classList.remove('over');
  });

  document.querySelector('.button').addEventListener('click', function(e){
    pausePlay(e.target);
  });
  
  function pausePlay(t){
    //if has pause class
    if(t.classList.contains('pause')){
      t.classList.remove('pause');
      t.classList.add('play');
      document.querySelector('.btn-icon').src = 'img/icon-play.svg';
      document.querySelector('.btn-bg').src = 'img/btn-play-bg.svg';
      pauseGeneration();
    } else if (t.classList.contains('play')) {
      t.classList.remove('play');
      t.classList.add('pause');
      document.querySelector('.btn-icon').src = 'img/icon-pause.svg';
      document.querySelector('.btn-bg').src = 'img/btn-pause-bg.svg';
      resumeGeneration();
    }
  }
  
})