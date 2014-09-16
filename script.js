// Intro to basic constructor functions
var container = []
function Bell(soundUrl,imageUrl) {
	container.push(this);
	this.sound = new Howl ({
		urls: [soundUrl]
	});
	this.image = imageUrl
	this.ring = function(callback) {
		this.sound.play();
		this.view();
		if (callback) {
			callback();
		};
	};
	this.fuseSet = function() {
		$fuse = $('<div class="fuse"/>')
		$fuse.css({'height':'50px','width':'100%','background-color':'red'})
		$('#timer').html($fuse)
	},
	this.delayedRing = function(callback) {
		this.fuseSet();
		var self = this;
		var time = Math.random()*4000+1;
		setTimeout(function(){
			self.ring()
			console.log(new Date());
			if (callback){
				callback();
			}
		}, time);
			self.view();
		$('.fuse').animate({width:"0px"},time);
	};
	this.view = function(){
		$('#images').children().remove();
		$('#images').append($view);
	};
	var $view = $('<div><img src=' + imageUrl+ '></div>')
};

// Instantiation code goes here. Example:
var gong = new Bell('sounds/gong.mp3','img/gong.jpg');
var bell = new Bell('sounds/bell.mp3','img/bell.jpg');
var deskbell = new Bell('sounds/deskbell.mp3','img/deskbell.jpg');
var doorbell = new Bell('sounds/doorbell.mp3','img/doorbell.jpg');
var cowbell = new Bell('sounds/cowbell.mp3','img/cowbell.jpg');

$('#ringer').on('click',function(e){
	deskbell.ring(doorbell.ring(bell.ring(gong.ring(cowbell.ring()))))
})
$('#ringer2').on('click',function(e){
	gong.delayedRing(function() {
		cowbell.delayedRing(function() {
			deskbell.delayedRing(function(){
				doorbell.delayedRing(function(){
					bell.delayedRing()
				})
			})
		})
	})
})

$('#ringer3').on('click',function(e){
	// for(var i = 0; i < 5; i++){
		shuffle(container).delayedRing(
			function(){shuffle(container).delayedRing(
				function(){shuffle(container).delayedRing(
					function(){shuffle(container).delayedRing(
						function(){shuffle(container).delayedRing(
						)}
					)}
				)}
			)}
		)
})

$('#ringer5').on('click',function(e){
  	var num = parseInt($('#ringer4').val());
	recursive(num)
})

var shuffle = function(array){
	length = array.length;
	num = parseInt(Math.random()*length)
	return array[num]
}

var recursive = function(x){
	if(x===1){
		return shuffle(container).delayedRing();
	}
	else{
		return shuffle(container).delayedRing(function() {
			recursive(x-1)
		})
	}
}