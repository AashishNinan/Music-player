
fetch('http://5dd1894f15bbc2001448d28e.mockapi.io/playlist')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        console.log(data);
        localStorage.setItem("song",JSON.stringify(data));
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });





var curr=0;  
var audio = new Audio();
var value =JSON.parse(localStorage.getItem("song"));
var len =value.length;
var lenn= len-2;
var isPlay= false;

function playAudio(curr){
	audio.src=value[this.curr].file;
	if(isPlay){
		audio.pause();
		isPlay=false;
	}else{
		audio.play();
		isPlay=true;
	}
	display(curr);
    
}

function playNext(){

	if(curr===(lenn)){
		curr=0;
	}
	else{
		curr++;
	}
	audio.pause();
	isPlay=false;
	playAudio();

}

function playBack(){
	if(curr===0){
		curr=lenn;
	}
	else{
		curr--;
	}
	audio.pause();
	isPlay=false;
	playAudio();
}

function reload(){
	audio.pause();
	isPlay=false;
	playAudio();
}

function shuffle(){
	var random = Math.floor(Math.random() *  ((lenn) +1))+1;
	if(random===8) random=-1;
	curr=random;
	audio.pause();
	isPlay=false;
	playAudio();

}
function display(curr){
	document.getElementById('image').src=value[this.curr].albumCover;
	document.getElementById('track').innerText=value[this.curr].track;
	document.getElementById('artist').innerText=value[this.curr].artist;
}



